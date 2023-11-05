// provider.tsx
/*"use client";
import {SessionProvider} from "next-auth/react";

export function MyProviders({children}: {children: React.ReactNode}) {
  return <SessionProvider>{children}</SessionProvider>;
}*/
'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'

const AuthProvider = ({children }:any) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default AuthProvider;