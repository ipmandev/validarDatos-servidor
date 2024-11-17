const express = require('express');
const bodyParser = require("body-parser");
const cors = require ("cors");

const app = express();
const port = 3001;


app.use(express.json());
app.use(express.static('public'));

app.use(cors());
app.use(bodyParser.json());


app.post('/login', (req, res) => {

  
  const { email, password } = req.body;
  console.log("server login",email,password)
 //const user = users.find(user => user.email === email && user.password === password);
  console.log(response);
  if (response.ok) {
    res.status(200).json({ });
  } else {
    res.status(404).json({  });
  }
});


app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(200).json({  message: 'Todos los campos son obligatorios' });
  }

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(404).json({ success: false, message: 'El usuario ya está registrado' });
  }

    users.push({ name, email, password });
  res.json({ success: true, message: 'Registro exitoso' });
});


app.post('/recovery', (req, res) => {
  const { email } = req.body;

  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(404).json({ success: false, message: 'Correo no encontrado' });
  }

  res.json({
    success: true,
    message: 'Correo enviado para recuperación. Ahora puedes establecer una nueva contraseña.',
  });
});


app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
