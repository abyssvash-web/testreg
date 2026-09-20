document.addEventListener("DOMContentLoaded", function () {
  // 1. Basahin ang Promo / Referral Code sa URL (halimbawa: ?promo=AYC4255C0FD3FC o ?d=33)
  const urlParams = new URLSearchParams(window.location.search);
  const promoCode = urlParams.get('promo') || urlParams.get('ref') || urlParams.get('d');

  if (promoCode) {
    document.getElementById('promoCode').value = promoCode;
    document.getElementById('referralDisplay').textContent = promoCode;
  } else {
    document.getElementById('referralDisplay').textContent = "None";
  }

  // 2. Submit Handler
  const form = document.getElementById('registerForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const finalPromoCode = document.getElementById('promoCode').value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const payload = {
      username: username,
      email: email,
      password: password,
      promoCode: finalPromoCode
    };

    console.log("Data to register:", payload);
    alert(`Account created successfully!\nReferral Used: ${finalPromoCode || 'None'}`);
  });
});
