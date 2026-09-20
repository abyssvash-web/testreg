document.addEventListener("DOMContentLoaded", function () {
  // 1. KUNIN ANG REFERRAL ID MULA SA URL (?d=33 o ?ref=33)
  const urlParams = new URLSearchParams(window.location.search);
  
  // Isusuri kung 'd' o 'ref' ang ginamit sa URL
  const referralId = urlParams.get('d') || urlParams.get('ref');

  if (referralId) {
    document.getElementById('referralCode').value = referralId;
    console.log("Referral ID detected:", referralId);
  } else {
    console.log("No referral ID found in URL.");
  }

  // 2. PAG-SUBMIT NG FORM
  const form = document.getElementById('registerForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      alert("Hindi magkatugma ang Password at Re-enter Password!");
      return;
    }

    // Kolektahin ang datos para ipadala sa iyong backend server/database
    const formData = {
      account: document.getElementById('username').value,
      password: password,
      securityQuestion: document.getElementById('securityQuestion').value,
      securityAnswer: document.getElementById('securityAnswer').value,
      email: document.getElementById('emailUser').value + document.getElementById('emailDomain').value,
      emailCode: document.getElementById('emailCode').value,
      referralBy: document.getElementById('referralCode').value // Dito papasok ang Referral ID!
    };

    console.log("Data to send to backend:", formData);
    alert(`Registration Successful!\nReferred by ID: ${formData.referralBy || 'None'}`);

    /*
      HALIMBAWA SA PHP / BACKEND API (Fetch Call):
      
      fetch('register_process.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(data => alert(data.message));
    */
  });
});
