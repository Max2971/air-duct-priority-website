/*
  # Add RLS Policies to Contact Submissions Table

  1. Security Updates
    - Add restrictive policies to contact_submissions table
    - Deny all public access (SELECT, INSERT, UPDATE, DELETE)
    - Table remains accessible only to service role (which bypasses RLS)
  
  2. Notes
    - These policies explicitly document that this table is service-role only
    - The service role used by edge functions bypasses RLS automatically
    - These policies prevent any accidental public access
*/

-- Deny all SELECT access to public users
CREATE POLICY "Service role only - no public select"
  ON contact_submissions FOR SELECT
  TO public
  USING (false);

-- Deny all INSERT access to public users
CREATE POLICY "Service role only - no public insert"
  ON contact_submissions FOR INSERT
  TO public
  WITH CHECK (false);

-- Deny all UPDATE access to public users
CREATE POLICY "Service role only - no public update"
  ON contact_submissions FOR UPDATE
  TO public
  USING (false)
  WITH CHECK (false);

-- Deny all DELETE access to public users
CREATE POLICY "Service role only - no public delete"
  ON contact_submissions FOR DELETE
  TO public
  USING (false);