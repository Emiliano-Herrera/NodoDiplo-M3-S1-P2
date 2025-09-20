import fs from "fs";

// Leer un archhivo de manera asincrónica;
fs.readFile("./example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Contenido del archivo:", data);
});

// Escribir en un nuevo archivo;
fs.writeFile("./newfile.txt", "Contenido nuevo", (err) => {
  if (err) throw err;
  console.log("Archivo creado y escrito");

  fs.rename("./newfile.txt", "./renamedfile.txt", (err) => {
    if (err) throw err;
    console.log("Archivo renombrado");
  });
});

// Renombrear un archivo;
