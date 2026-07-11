export async function POST(request) {
  const apiKey = process.env.BUTTONDOWN_API_KEY;

  if (!apiKey) {
    return Response.json({ error: 'Newsletter signup is not configured yet.' }, { status: 503 });
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const response = await fetch('https://api.buttondown.com/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      tags: ['netaitools-homepage'],
    }),
  });

  if (!response.ok) {
    return Response.json({ error: 'We could not complete the signup. Please try again.' }, { status: 502 });
  }

  return Response.json({ message: 'Check your inbox to confirm your subscription.' });
}
