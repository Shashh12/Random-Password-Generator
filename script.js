document.getElementById('generate-btn').addEventListener('click', generatePassword);
document.getElementById('copy-btn').addEventListener('click', copyPassword);

function generatePassword() {
  const length = parseInt(document.getElementById('length').value);
  const includeLowercase = document.getElementById('include-lowercase').checked;
  const includeUppercase = document.getElementById('include-uppercase').checked;
  const includeNumbers = document.getElementById('include-numbers').checked;
  const includeSpecial = document.getElementById('include-special').checked;

  // Ensure the password length is at least 8
  if (length < 8) {
    alert("Password length must be at least 8 characters.");
    return;
  }

  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
 
  let charPool = '';

  if (includeLowercase) charPool += lowercaseChars;
  if (includeUppercase) charPool += uppercaseChars;
  if (includeNumbers) charPool += numberChars;
  if (includeSpecial) charPool += specialChars;

  if (charPool === '') {
    alert("You must select at least one character type.");
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }

  document.getElementById('password').value = password;
}

// Function to copy the password to clipboard
function copyPassword() {
  const passwordField = document.getElementById('password');
 
  // Select the password text
  passwordField.select();
  passwordField.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text to clipboard
  document.execCommand('copy');

  // Optional: Alert user that password has been copied
  alert('Password copied to clipboard!');
}

