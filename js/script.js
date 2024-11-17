document.getElementById('login').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("login")
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const data = {email, password};

    if (!email || !password) {
      mostrarMensaje('login-message', 'Por favor, completa todos los campos.');
      
    }else{
        mostrarMensaje('login-message', 'Inicio de sesión exitoso', 'success');
    }
  
    


  try{
    const response = await fetch("http://localhost:3001/login",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data),
    });
console.log(response)
    if (response.ok) {
        const responseData = await response.json();
    }
  }
  catch (error){
    console.log(error);
  }
});

  document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const password2 = document.getElementById('register-password2').value.trim();
  
    if (!name || !email || !password || !password2) {
      mostrarMensaje('register-message', 'Todos los campos son obligatorios.');
      return;
    }
  
    if (password.length < 8 || password !== password2) {
      mostrarMensaje('register-message', 'Las contraseñas no coinciden o son muy cortas.');
      return;
    }
  
    mostrarMensaje('register-message', 'Registro exitoso', 'success');

    try{
        const response = await fetch("http://localhost:3001/register-form",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data),
        });
    
        if (response.ok) {
            const responseData = await response.json();
        }
      }
      catch (error){
        console.log(error);
      }
  });
  
 
  document.getElementById('recovery-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('recovery-email').value.trim();
  
    if (!email) {
      mostrarMensaje('recovery-message', 'Por favor, ingresa un correo.');
      return;
    }
  
    mostrarMensaje('recovery-message', 'Correo enviado para recuperación.', 'success');

    try{
        const response = await fetch("http://localhost:3001/recovery-form",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data),
        });
    
        if (response.ok) {
            const responseData = await response.json();
        }
      }
      catch (error){
        console.log(error);
      }
  });
  
 
  function mostrarMensaje(id, mensaje, tipo = 'error') {
    const messageDiv = document.getElementById(id);
    messageDiv.textContent = mensaje;
    messageDiv.style.color = tipo === 'success' ? 'green' : 'red';
  }
  

  