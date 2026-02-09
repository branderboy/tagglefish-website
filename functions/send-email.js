export async function onRequestPost(context) {
  try {
    const { name, email, message, type } = await context.request.json();

    const subject = type === 'contact'
      ? `New Contact Form: ${name}`
      : `New Submission: ${name}`;

    const htmlBody = `
      <h2>New ${type || 'contact'} submission from TaggleFish</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message || 'No message provided'}</p>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'TaggleFish <hello@tagglefish.com>',
        to: ['hello@tagglefish.com'],
        subject: subject,
        html: htmlBody,
        reply_to: email
      })
    });

    if (response.ok) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      const error = await response.text();
      return new Response(JSON.stringify({ error: 'Email failed', details: error }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
