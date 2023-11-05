"use client";

import { useSession, signIn, signOut } from "next-auth/react"
import UserInformation from './user-information'

export default function Component({children}) {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        {children}
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('myauth')}>Sign in</button>
    </>
  )
}

