const form = document.getElementById('pair-form');
const phone = document.getElementById('phone');
const submit = document.getElementById('submit');
const notice = document.getElementById('notice');
const noticeText = document.getElementById('notice-text');
const valid = document.getElementById('valid');

function setNotice(message, kind = '') {
  notice.className = `notice ${kind}`;
  noticeText.textContent = message;
}

phone.addEventListener('input', () => {
  phone.value = phone.value.replace(/\D/g, '').slice(0, 15);
  valid.textContent = phone.value.length >= 8 ? '✓' : '↗';
  valid.style.color = phone.value.length >= 8 ? 'var(--mint)' : '#5f7075';
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const value = phone.value.trim();
  if (!/^\d{8,15}$/.test(value)) {
    setNotice('Enter 8–15 digits with your country code.', 'error');
    phone.focus();
    return;
  }
  submit.disabled = true;
  submit.querySelector('span').textContent = 'Generating secure code…';
  setNotice('Contacting the configured pairing service…');
  try {
    const response = await fetch('/api/pair', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ phone: value })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Pairing service unavailable.');
    setNotice(`Pairing code: ${data.code || data.pairingCode || 'Check WhatsApp for the code.'}`, 'success');
    submit.querySelector('span').textContent = 'Code generated';
  } catch (error) {
    setNotice(error.message, 'error');
    submit.querySelector('span').textContent = 'Generate pairing code';
  } finally {
    submit.disabled = false;
  }
});
