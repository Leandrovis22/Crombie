function validar(email, password, description) {
    
    if (!email.includes("@") || !email.includes(".com")) {
      console.log("Error: Email invalido");
      return;
    }
  
    if (password.length < 8 || password.length > 16 || !/[A-Z]/.test(password)) {
      console.log("Error: Contraseña invalida");
      return;
    }
  
    if (description.includes("-") || description.length > 400) {
      console.log("Error: Descripcion no debe tener '-' o debe ser menor de 400 caracteres");
      return;
    }
  
    console.log("Registracion exitosa");
  }
  
  const email = "test@ejemplo.com";
  const password = "Contraseña1";
  const description = "Descripcion valida";
  
  validar(email, password, description);
  