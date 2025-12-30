"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { User } from "next-auth";

const AuthContext = createContext<User | null>(null);

export function AuthProvider({
  user,
  children,
}: {
  user: User | null;
  children: ReactNode;
}) {
  const data = useMemo(() => user, [user]);

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export function useAuthUser() {
  const ctx = useContext(AuthContext);

  if (ctx === undefined) {
    throw new Error("useAuthUser must be used inside AuthProvider");
  }

  return ctx;
}
