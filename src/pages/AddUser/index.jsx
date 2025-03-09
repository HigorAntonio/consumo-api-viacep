import PageIndicator from "../../components/PageIndicator";
import AddUserForm from "../../components/AddUserForm";

import "./AddUser.css";

function AddUser() {
  return (
    <div className="add-user-container">
      <div className="add-user-content">
        <PageIndicator path="Usuários > " current="Cadastrar usuário" />
        <AddUserForm />
      </div>
    </div>
  );
}

export default AddUser;
