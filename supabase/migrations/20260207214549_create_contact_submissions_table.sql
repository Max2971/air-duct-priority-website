/*
  # Create Contact Form Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier
      - `email` (text) - Submitter's email address
      - `ip_address` (text) - IP address for rate limiting
      - `submitted_at` (timestamptz) - Submission timestamp
      - `created_at` (timestamptz) - Record creation timestamp
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - No public access policies (admin/service role only)
  
  3. Indexes
    - Index on email and submitted_at for rate limit queries
    - Index on ip_address and submitted_at for rate limit queries
  
  4. Notes
    - This table tracks form submissions for spam prevention
    - Rate limiting checks submissions within last 15 minutes
    - Only accessible via service role (edge functions)
*/

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  ip_address text,
  submitted_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create indexes for efficient rate limit queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email_time 
  ON contact_submissions(email, submitted_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_ip_time 
  ON contact_submissions(ip_address, submitted_at DESC);

-- No public policies - only service role can access
-- This ensures security for rate limiting data