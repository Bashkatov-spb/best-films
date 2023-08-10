const formReg = document.querySelector('#form-reg');

if (formReg) {
  formReg.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'success') {
      window.location.assign('/');
    } else {
      document.querySelector('.error').innerHTML = data.message;
    }
  });
}
