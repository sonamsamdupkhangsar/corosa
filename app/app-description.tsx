//"use client"

import { getServerSession } from "next-auth/next";
import { useSession, signIn, signOut } from "next-auth/react"
import UserInformation from "./user-information"

export default async function AppDescription() {
    const session = await getServerSession()
    //const { data: session } = useSession()
    console.log("Hello from app-description.js")
    return (
        <div>
            <div>
                This is the application description component (server component).            
            </div>
            <UserInformation data={session.user} />
        </div>
    )
}