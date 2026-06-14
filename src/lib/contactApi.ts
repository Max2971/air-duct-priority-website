const CONTACT_API_URL = 'https://rfmdfgpfvnfdifxmtemk.supabase.co/functions/v1/contact';
const CONTACT_API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmbWRmZ3Bmdm5mZGlmeG10ZW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyNzI5NzcsImV4cCI6MjA5NTg0ODk3N30.Gd10eqdviB9QlqhhCgEO9nv_5SKWf0SrCZyfj1MA-Fc';

export async function submitContactRequest(data: Record<string, string>) {
  const response = await fetch(CONTACT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${CONTACT_API_KEY}`,
    },
    body: JSON.stringify(data),
  });
  const result = await response.json().catch(() => null);

  if (!response.ok || result?.ok !== true) {
    throw new Error(result?.error || 'The request could not be sent.');
  }
}
