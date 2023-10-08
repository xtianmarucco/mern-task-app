const dotenv =require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const { default: mongoose } = require("mongoose");


const app = express();

connectDB();

const PORT = process.env.PORT || 3000;

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server runnin on port ${PORT}`);
  });
}
).catch((err) => console.log(err));



// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`server running asdasdasdasdas on port ${PORT}`);
    
//     });

//   } catch (error) {
//     console.log(error);
//   }
// };
// startServer();


app.get("/test", (req, res) => {
  res.send("¡El servidor Express está funcionando correctamente!");
});

app.get("/", (req, res) => {
  res.send("homepage");
});
app.get("/json", (req, res) => {
  const obj = { name: "John", age: 30, city: "New York" };
  res.send(obj);
});
app.get("/users", (req, res) =>{
  const users = [
    {
      id: 1,
      nombre: "Juan Perez",
      correoElectronico: "juan.perez@example.com",
      edad: 30,
      direccion: {
        calle: "123 Calle Principal",
        ciudad: "Ciudad Ejemplo",
        codigoPostal: "12345",
      },
      telefonos: ["555-555-5555", "666-666-6666"],
      intereses: ["Deportes", "Música", "Viajes"],
    },
    {
      id: 2,
      nombre: "Ana Rodriguez",
      correoElectronico: "ana.rodriguez@example.com",
      edad: 25,
      direccion: {
        calle: "456 Calle Secundaria",
        ciudad: "Otra Ciudad",
        codigoPostal: "54321",
      },
      telefonos: ["777-777-7777"],
      intereses: ["Arte", "Cine", "Lectura"],
    },
  ];
  
 res.send(users);
});

