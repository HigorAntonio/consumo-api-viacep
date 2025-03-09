import { useContext, useState, useEffect } from "react";

import SecondaryButton from "../SecondaryButton";
import UserDetails from "../UserDetails";

import { ModalContext } from "../../context/modalContext";
import { getUsers, deleteUser } from "../../utils/database";

import "./UsersList.css";

function UsersList() {
  const { setContent: setModalContent, setIsOpen: setIsModalOpen } =
    useContext(ModalContext);

  const [users, setUsers] = useState({});
  const [getUsersConfig, setGetUsersConfig] = useState({
    pageSize: 10,
    page: 1,
  });
  const [pageInfo, setPageInfo] = useState({});

  useEffect(() => {
    return () => {
      setIsModalOpen(false);
    };
  }, [setIsModalOpen]);

  useEffect(() => {
    setUsers(getUsers(getUsersConfig));
  }, [getUsersConfig]);

  useEffect(() => {
    setPageInfo({
      firstItem: (getUsersConfig.page - 1) * getUsersConfig.pageSize + 1,
      lastItem:
        (getUsersConfig.page - 1) * getUsersConfig.pageSize +
        users.data?.length,
    });
  }, [getUsersConfig, users]);

  function handleShowUserDetails(user) {
    setModalContent(<UserDetails user={user} />);
    setIsModalOpen(true);
  }

  function handleUserNameOnEnterKeyDown(event, user) {
    if (event.key === "Enter") {
      handleShowUserDetails(user);
    }
  }

  function handleDeleteUserButton(user) {
    deleteUser(user);
    setUsers(getUsers(getUsersConfig));
  }

  function handleOnClickPrevPage() {
    setGetUsersConfig((prevState) => ({
      pageSize: prevState.pageSize,
      page: prevState.page - 1,
    }));
  }

  function handleOnClickNextPage() {
    setGetUsersConfig((prevState) => ({
      pageSize: prevState.pageSize,
      page: prevState.page + 1,
    }));
  }

  return (
    <div className="users-list-container">
      <section className="users-table">
        <header className="users-table-header">
          <h2>Nome</h2>
        </header>
        <main className="users-table-main">
          {users.data?.map((user, index) => (
            <div className="user-row" key={index}>
              <p
                className="user-name"
                title={user.name}
                tabIndex="0"
                onClick={() => handleShowUserDetails(user)}
                onKeyDown={(event) => handleUserNameOnEnterKeyDown(event, user)}
              >
                {user.name}
              </p>
              <div className="action-buttons">
                {/* <button className="action-button">Editar</button> */}
                {/* <button className="action-button">Visualizar</button> */}
                <button
                  className="action-button delete-button"
                  onClick={() => handleDeleteUserButton(user)}
                >
                  Apagar
                </button>
              </div>
            </div>
          ))}
        </main>
      </section>
      <div className="actions-container">
        <SecondaryButton
          disabled={getUsersConfig.page === 1}
          onClick={handleOnClickPrevPage}
        >
          Anterior
        </SecondaryButton>
        <p className="pagination-info">
          {users.total === 0
            ? "Nenhum usuário cadastrado."
            : `${pageInfo.firstItem}-${pageInfo.lastItem} de ${users.total}`}
        </p>
        <SecondaryButton
          disabled={getUsersConfig.page === users["last_page"]}
          onClick={handleOnClickNextPage}
        >
          Proximo
        </SecondaryButton>
      </div>
    </div>
  );
}

export default UsersList;
