import { FormEvent, useState } from "react";

const initialUsers = ["Ana", "Luis", "Mateo"];

export const useUserListViewModel = () => {
  const [users, setUsers] = useState<string[]>(initialUsers);
  const [newUser, setNewUser] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedUser = newUser.trim();

    if (!trimmedUser) {
      return;
    }

    setUsers((currentUsers) => [...currentUsers, trimmedUser]);
    setNewUser("");
  };

  const handleUserChange = (value: string) => {
    setNewUser(value);
  };

  const handleDeleteUser = (userToDelete: string) => {
    setUsers((currentUsers) =>
      currentUsers.filter((user) => user !== userToDelete)
    );
  };

  return {
    users,
    newUser,
    handleSubmit,
    handleUserChange,
    handleDeleteUser,
  };
};
