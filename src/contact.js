/**
 * Contact Form & Email Logic (Resend API)
 */

export function initContactForm() {
  const leadForm = document.getElementById('lead-form');
  if (!leadForm) return;

  leadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const successMsg = document.getElementById('form-success');
    
    const formData = {
      name: form.querySelector('input[placeholder="Your Name"]').value,
      email: form.querySelector('input[placeholder="Email Address"]').value,
      company: form.querySelector('input[placeholder="Company Name"]').value,
      interest: form.querySelector('select').value,
      message: form.querySelector('textarea').value
    };

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      // Replace with your actual Resend API Key
      const RESEND_API_KEY = 're_123456789'; 
      
      const sendEmail = async (to, subject, html) => {
        return fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: 'FireSlab <onboarding@resend.dev>',
            to: [to],
            subject: subject,
            html: html
          })
        });
      };

      const footerHtml = `
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <footer style="font-size: 12px; color: #666;">
          <p>&copy; 2026 FireSlab Industries. All Rights Reserved.</p>
          <p>Developed by <a href="https://brandnestagency.vercel.app" style="color: #e07b2a; text-decoration: none;">Brandnest - India's First AI Powered Digital agency</a></p>
        </footer>
      `;

      // Admin Email Template
      const adminHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #e07b2a;">New Inquiry Received</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Company:</strong> ${formData.company || 'N/A'}</p>
          <p><strong>Solution Interest:</strong> ${formData.interest}</p>
          <p><strong>Message:</strong><br>${formData.message}</p>
          ${footerHtml}
        </div>
      `;

      // Customer Email Template
      const customerHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #e07b2a;">Thank You!</h2>
          <p>Hi ${formData.name},</p>
          <p>Thank you for reaching out to FireSlab Industries. We have received your inquiry regarding <strong>${formData.interest}</strong> and our engineering team will get back to you within 24 hours.</p>
          <p>Best regards,<br>Team FireSlab</p>
          ${footerHtml}
        </div>
      `;

      const res1 = await sendEmail('info@fireslab.com', `New Inquiry: ${formData.name}`, adminHtml);
      const res2 = await sendEmail(formData.email, 'We received your inquiry - FireSlab', customerHtml);

      if (res1.ok || res2.ok) {
        form.style.display = 'none';
        successMsg.classList.remove('hidden');
      } else {
        throw new Error('Resend API call failed');
      }
    } catch (err) {
      console.error('Email API Error, using fallback:', err);
      triggerMailtoFallback(formData, form, successMsg);
    }
  });
}

function triggerMailtoFallback(formData, form, successMsg) {
  const subject = encodeURIComponent(`New Inquiry: ${formData.interest} - ${formData.name}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Company: ${formData.company || 'N/A'}\n` +
    `Interest: ${formData.interest}\n\n` +
    `Message:\n${formData.message}\n\n` +
    `--- Sent via FireSlab Contact Form ---`
  );
  
  const mailtoLink = `mailto:info@fireslab.com?subject=${subject}&body=${body}`;
  
  form.style.display = 'none';
  successMsg.innerHTML = `
    <div class="success-content">
      <i data-lucide="mail"></i>
      <h3>Redirecting to Email...</h3>
      <p>Our automated system is currently in setup. Your email app will open to send the inquiry.</p>
      <a href="${mailtoLink}" class="btn btn-green" style="margin-top: 1rem; display: inline-block;">Send Email Manually</a>
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();
  successMsg.classList.remove('hidden');

  setTimeout(() => {
    window.location.href = mailtoLink;
  }, 1500);
}
