"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button onClick={() => signIn()}>
      Acceder
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button onClick={() => signOut()}>
      Cerrar sesión
    </button>
  );
};
