/*
# Tighten RLS policies on travel_quote_requests

1. Purpose
   Fixes three RLS policies flagged as "always true" by the security scanner:
   - `anon_insert_quote` (INSERT, WITH CHECK (true))
   - `auth_update_quotes` (UPDATE, USING (true) WITH CHECK (true))
   - `auth_delete_quotes` (DELETE, USING (true))

2. Changes
   - INSERT (anon_insert_quote): Replace `WITH CHECK (true)` with a meaningful
     validation predicate that requires the non-null fields the public form
     actually submits (name, destination, travel_date, budget). This keeps the
     public quote form working (no sign-in) while rejecting empty/malformed
     rows instead of blindly accepting anything.
   - UPDATE (auth_update_quotes): DROP the policy entirely. With no UPDATE
     policy, neither anon nor authenticated users can update rows through the
     anon-key client. Only the service role (which bypasses RLS) can modify
     quotes — appropriate for staff review in the dashboard.
   - DELETE (auth_delete_quotes): DROP the policy entirely, same rationale as
     UPDATE. Only the service role can delete quotes.

3. Security impact
   - Public INSERT still works for the no-auth website quote form.
   - Authenticated (anon-key) clients can no longer UPDATE or DELETE any quote.
   - SELECT remains authenticated-only (staff dashboard). INSERT remains
     anon+authenticated. UPDATE/DELETE are now service-role-only via RLS
     bypass — no public path exists.
*/

-- INSERT: validate required fields instead of blindly accepting all rows
DROP POLICY IF EXISTS "anon_insert_quote" ON travel_quote_requests;
CREATE POLICY "anon_insert_quote"
ON travel_quote_requests FOR INSERT
TO anon, authenticated
WITH CHECK (
  coalesce(length(btrim(name)), 0) > 0
  AND coalesce(length(btrim(destination)), 0) > 0
  AND travel_date IS NOT NULL
  AND coalesce(length(btrim(budget)), 0) > 0
);

-- UPDATE: remove the always-true policy; no UPDATE path for anon/authenticated
DROP POLICY IF EXISTS "auth_update_quotes" ON travel_quote_requests;

-- DELETE: remove the always-true policy; no DELETE path for anon/authenticated
DROP POLICY IF EXISTS "auth_delete_quotes" ON travel_quote_requests;
