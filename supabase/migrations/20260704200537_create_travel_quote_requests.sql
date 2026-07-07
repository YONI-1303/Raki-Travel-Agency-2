/*
# Create travel_quote_requests table (single-tenant, no auth)

1. Purpose
   Stores travel quote requests submitted through the public "Request a Travel Quote"
   form on the Raki Travel Agency website. The site has no sign-in screen, so the
   anon-key frontend must be able to INSERT rows. There is no user-facing read/update/
   delete of these rows from the website — only agency staff will review them in the
   Supabase dashboard.

2. New Tables
   - `travel_quote_requests`
     - `id` (uuid, primary key)
     - `name` (text, not null) — submitter's full name
     - `destination` (text, not null) — requested destination
     - `travel_date` (date, not null) — requested travel date
     - `budget` (text, not null) — budget range / amount (free text)
     - `message` (text, nullable) — optional extra notes
     - `status` (text, default 'new') — workflow status for staff
     - `created_at` (timestamptz, default now())

3. Security
   - Enable RLS on `travel_quote_requests`.
   - INSERT allowed for anon + authenticated (public quote form, no sign-in).
   - SELECT/UPDATE/DELETE allowed for authenticated only (staff review in dashboard).
     The anon-key website cannot read back submitted quotes, which is intentional —
     quote data is private to the agency.
*/

CREATE TABLE IF NOT EXISTS travel_quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  destination text NOT NULL,
  travel_date date NOT NULL,
  budget text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE travel_quote_requests ENABLE ROW LEVEL SECURITY;

-- Public insert (the quote form has no sign-in)
DROP POLICY IF EXISTS "anon_insert_quote" ON travel_quote_requests;
CREATE POLICY "anon_insert_quote"
ON travel_quote_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- Staff-only read/update/delete (authenticated dashboard users)
DROP POLICY IF EXISTS "auth_select_quotes" ON travel_quote_requests;
CREATE POLICY "auth_select_quotes"
ON travel_quote_requests FOR SELECT
TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_quotes" ON travel_quote_requests;
CREATE POLICY "auth_update_quotes"
ON travel_quote_requests FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_quotes" ON travel_quote_requests;
CREATE POLICY "auth_delete_quotes"
ON travel_quote_requests FOR DELETE
TO authenticated USING (true);
