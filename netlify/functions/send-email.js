const https = require('https');

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { name, email, message, type } = JSON.parse(event.body);

    // Build email content
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

    const data = JSON.stringify({
      from: 'TaggleFish <hello@tagglefish.com>',
      to: ['hello@tagglefish.com'],
      subject: subject,
      html: htmlBody,
      reply_to: email
    });

    // Send via Resend API
    const result = await new Promise((resolve, reject) => {
      const req = https.request({
        hostname: 'api.resend.com',
        path: '/emails',
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data)
        }
      }, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => resolve({ statusCode: res.statusCode, body }));
      });

      req.on('error', reject);
      req.write(data);
      req.end();
    });

    if (result.statusCode >= 200 && result.statusCode < 300) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: true })
      };
    } else {
      console.error('Resend error:', result.body);
      return {
        statusCode: result.statusCode,
        body: JSON.stringify({ error: 'Email failed to send', details: result.body })
      };
    }

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error' })
    };
  }
};
