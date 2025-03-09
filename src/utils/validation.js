function validateUserName(userName) {
  if (userName.trim() === "") {
    return "O campo nome não pode estar vazio.";
  }
  if (/\d/.test(userName)) {
    return "O nome deve conter apenas letras.";
  }
  if (/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(userName)) {
    return "Caracteres especiais não são permitidos.";
  }
  if (/\s{2,}/.test(userName)) {
    return "O nome não pode conter espaços consecutivos.";
  }
  return "";
}

function validateEmail(email) {
  if (email.trim() === "") {
    return "O campo email não pode estar vazio.";
  }
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return "Formato de email inválido.";
  }
  return "";
}

function validateCep(cep) {
  if (cep.trim() === "") {
    return "O campo CEP não pode estar vazio.";
  }
  if (!/^\d{8}$|^\d{5}-\d{3}$/.test(cep)) {
    return "CEP deve conter 8 dígitos.";
  }
  return "";
}

function validateStreet(street) {
  if (street.trim() === "") {
    return "O campo rua não pode estar vazio.";
  }
  if (/\s{2,}/.test(street)) {
    return "O campo rua não pode conter espaços consecutivos.";
  }
  return "";
}

function validateAddressNumber(addressNumber) {
  if (addressNumber.trim() === "") {
    return "O campo número não pode estar vazio.";
  }
  if (!/^[1-9][0-9]*$/.test(addressNumber)) {
    return "O número do endereço deve conter apenas números e não pode começar com zero.";
  }
  return "";
}

function validateNeighborhood(neighborhood) {
  if (neighborhood.trim() === "") {
    return "O campo bairro não pode estar vazio.";
  }
  if (/\s{2,}/.test(neighborhood)) {
    return "O campo bairro não pode conter espaços consecutivos.";
  }
  return "";
}

function validateCity(city) {
  if (city.trim() === "") {
    return "O campo cidade não pode estar vazio.";
  }
  if (/\s{2,}/.test(city)) {
    return "O campo cidade não pode conter espaços consecutivos.";
  }
  return "";
}

function validateState(state) {
  if (state.trim() === "") {
    return "O campo estado não pode estar vazio.";
  }
  if (/\d/.test(state)) {
    return "O estado deve conter apenas letras.";
  }
  if (/\s{2,}/.test(state)) {
    return "O campo estado não pode conter espaços consecutivos.";
  }
  return "";
}

export function validateAddUserForm(formData, setErrorMessages) {
  const errorMessages = {
    name: validateUserName(formData.name),
    email: validateEmail(formData.email),
    cep: validateCep(formData.cep),
    street: validateStreet(formData.street),
    addressNumber: validateAddressNumber(formData.addressNumber),
    neighborhood: validateNeighborhood(formData.neighborhood),
    city: validateCity(formData.city),
    state: validateState(formData.state),
  };

  setErrorMessages(errorMessages);

  const isValid =
    Object.values(errorMessages).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      ""
    ) === "";

  return isValid;
}
