import "./ListUsers.css";

import PageIndicator from "../../components/PageIndicator";
import UsersList from "../../components/UsersList";

function ListUsers() {
  return (
    <div className="list-users-container">
      <div className="list-users-content">
        <PageIndicator path="Usuários > " current="Listar usuários" />
        <UsersList />
      </div>
    </div>
  );
}

export default ListUsers;
