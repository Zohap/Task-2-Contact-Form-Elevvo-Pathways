document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  // Define the regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Basic structure check using URL (optional if using regex)
  try {
    new URL("mailto:" + email);
  } catch {
    status.style.color = 'red';
    status.textContent = 'Email format looks wrong.';
    return;
  }

  // Check empty fields
  if (!fullName || !email || !subject || !message) {
    status.style.color = 'red';
    status.textContent = 'Please fill out all fields.';
    return;
  }

  // Check email format
  if (!emailRegex.test(email)) {
    status.style.color = 'red';
    status.textContent = 'Please enter a valid email address.';
    return;
  }

  // Simulate success
  status.style.color = 'green';
  status.textContent = 'Message sent successfully!';
  this.reset();
});
