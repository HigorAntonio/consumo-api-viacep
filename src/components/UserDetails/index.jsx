import "./UserDetails.css";

function UserDetails({ user }) {
  return (
    <div className="user-details-container">
      <div className="user-details-header">
        <h1>Detalhes do Usuário</h1>
      </div>
      <div className="user-details-main">
        <p className="user-name">{user.name}</p>
        <p className="user-address">{`${user.street}, ${user.addressNumber}, ${user.neighborhood}, ${user.city}, ${user.state}, ${user.cep}`}</p>
      </div>
    </div>
  );
}

export default UserDetails;
