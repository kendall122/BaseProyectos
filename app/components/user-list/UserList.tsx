"use client";

import { Button, Label, Section, Text, Title } from "@/app/components";
import { TitleVariant } from "@/app/components/title/constants";
import { useUserListViewModel } from "./hooks/useUserListViewModel";

const UserList = () => {
  const {
    users,
    newUser,
    handleSubmit,
    handleUserChange,
    handleDeleteUser,
  } = useUserListViewModel();

  return (
    <Section className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 sm:p-8">
        <Title
          variant={TitleVariant.SECONDARY}
          className="mb-6 text-3xl font-bold text-slate-900"
        >
          Lista de usuarios
        </Title>

        <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex-1">
            <Label htmlFor="new-user" className="mb-2 block text-sm font-medium text-slate-700">
              Nombre de usuario
            </Label>
            <input
              id="new-user"
              type="text"
              value={newUser}
              onChange={(event) => handleUserChange(event.target.value)}
              placeholder="Agregar nombre de usuario"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            />
          </div>

          <Button
            type="submit"
            className="rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-200"
          >
            Agregar
          </Button>
        </form>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <Text className="mb-3 text-lg font-semibold text-slate-800">Usuarios</Text>

          {users.length === 0 ? (
            <p className="text-sm text-slate-500">No hay usuarios agregados.</p>
          ) : (
            <ul className="space-y-3">
              {users.map((user) => (
                <li
                  key={user}
                  className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3"
                >
                  <span className="text-base font-medium text-slate-700">{user}</span>
                  <Button
                    type="button"
                    onClick={() => handleDeleteUser(user)}
                    className="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-100"
                  >
                    Eliminar
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Section>
  );
};

export default UserList;
