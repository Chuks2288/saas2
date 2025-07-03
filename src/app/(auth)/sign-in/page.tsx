import React from 'react'
import { SignInView } from '@/modules/auth/ui/views/sign-in-view'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { sessionExistsRedirect } from '@/lib/session'

const Page = async () => {
    const session = await sessionExistsRedirect();

    return <SignInView />
}

export default Page