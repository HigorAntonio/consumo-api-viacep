export function addUser(userData) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  localStorage.setItem(
    "users",
    JSON.stringify(
      [...users, userData].sort((a, b) => a.name.localeCompare(b.name))
    )
  );
}

export function getUsers({ pageSize, page }) {
  if (page <= 0) {
    throw new Error("page must be a positive number");
  }
  if (pageSize <= 0) {
    throw new Error("pageSize must be a positive number");
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  return {
    data: users.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize),
    current_page: page,
    page_size: pageSize,
    total: users.length,
    last_page: Math.ceil(users.length / pageSize) || 1,
  };
}

export function deleteUser(userToDelete) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUsers = users.filter(
    (user) => JSON.stringify(user) !== JSON.stringify(userToDelete)
  );
  localStorage.setItem("users", JSON.stringify(currentUsers));
}
