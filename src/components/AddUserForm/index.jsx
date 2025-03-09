import { useContext, useState, useRef, useEffect } from "react";

import Input from "../Input";
import PrimaryButton from "../PrimaryButton";

import useFetchAddress from "../../hooks/useFetchAddress";
import { validateAddUserForm } from "../../utils/validation";
import { addUser } from "../../utils/database";
import { ToastContext } from "../../context/toastContext";

import "./AddUserForm.css";

function AddUserForm() {
  const { toastListPush } = useContext(ToastContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cep: "",
    street: "",
    addressNumber: "",
    neighborhood: "",
    city: "",
    state: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    cep: "",
    street: "",
    addressNumber: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const nameInputRef = useRef();

  const { data, fetchFunction } = useFetchAddress();

  function handleOnChangeFormInput(event, key) {
    setFormData((prevState) => ({
      ...prevState,
      [key]: event.target.value,
    }));
  }

  useEffect(() => {
    if (data) {
      setFormData((prevState) => ({
        ...prevState,
        street: data.logradouro,
        addressNumber: "",
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.estado,
      }));
    }
  }, [data]);

  function handleOnChangeCep(event) {
    let value = event.target.value.replace(/\D/g, ""); // Remove o que não for número

    if (value.length > 5) {
      value = value.slice(0, 5) + "-" + value.slice(5, 8); // Adiciona hífen
    }

    setFormData((prevState) => ({
      ...prevState,
      cep: value,
    }));
  }

  function handleOnBlurCep() {
    fetchFunction(formData.cep.replace("-", ""));
  }

  function clearFormData() {
    setFormData({
      name: "",
      email: "",
      cep: "",
      street: "",
      addressNumber: "",
      neighborhood: "",
      city: "",
      state: "",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const isValid = validateAddUserForm(formData, setErrorMessages);

    if (isValid) {
      addUser(formData);
      toastListPush({
        title: "Usuário Cadastrado",
        description: "Novo usuário adicionado à lista de usuários",
        severity: "success",
      });
      clearFormData();
      nameInputRef.current.focus();
    } else {
      toastListPush({
        title: "Falha ao Cadastrar",
        description: "Verifique os dados do formulário e tente novamente",
        severity: "error",
      });
    }
  }

  return (
    <form className="add-user-form" onSubmit={handleSubmit} noValidate>
      <div className="inputs-wrapper">
        <Input
          type="text"
          id="name"
          label="Nome"
          placeholder="Digite o nome do usuário"
          errorMessage={errorMessages.name}
          value={formData.name}
          onChange={(event) => handleOnChangeFormInput(event, "name")}
          ref={nameInputRef}
        />
        <Input
          type="email"
          id="email"
          label="E-mail"
          placeholder="Digite o e-mail do usuário"
          errorMessage={errorMessages.email}
          value={formData.email}
          onChange={(event) => handleOnChangeFormInput(event, "email")}
        />
        <Input
          type="text"
          id="cep"
          label="CEP"
          placeholder="Digite o CEP do usuário"
          errorMessage={errorMessages.cep}
          value={formData.cep}
          onChange={handleOnChangeCep}
          onBlur={handleOnBlurCep}
        />
        <Input
          type="text"
          id="street"
          label="Logradouro"
          placeholder="Digite a rua do endereço do usuário"
          errorMessage={errorMessages.street}
          value={formData.street}
          onChange={(event) => handleOnChangeFormInput(event, "street")}
        />
        <Input
          type="text"
          id="address-number"
          label="Número"
          placeholder="Digite o número do endereço do usuário"
          errorMessage={errorMessages.addressNumber}
          value={formData.addressNumber}
          onChange={(event) => handleOnChangeFormInput(event, "addressNumber")}
        />
        <Input
          type="text"
          id="neighborhood"
          label="Bairro"
          placeholder="Digite o bairro do endereço do usuário"
          errorMessage={errorMessages.neighborhood}
          value={formData.neighborhood}
          onChange={(event) => handleOnChangeFormInput(event, "neighborhood")}
        />
        <Input
          type="text"
          id="city"
          label="Cidade"
          placeholder="Digite cidade do endereço do usuário"
          errorMessage={errorMessages.city}
          value={formData.city}
          onChange={(event) => handleOnChangeFormInput(event, "city")}
        />
        <Input
          type="text"
          id="state"
          label="Estado"
          placeholder="Digite o estado do endereço do usuário"
          errorMessage={errorMessages.state}
          value={formData.state}
          onChange={(event) => handleOnChangeFormInput(event, "state")}
        />
      </div>
      <div className="button-wrapper">
        <PrimaryButton type="submit">Cadastrar</PrimaryButton>
      </div>
    </form>
  );
}

export default AddUserForm;
