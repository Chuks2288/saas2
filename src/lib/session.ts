import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

/**
 * If no session exists, redirect (e.g. protect private routes).
 */
export async function noSessionRedirect(path = "/sign-in") {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect(path);
    }

    return session;
}

/**
 * If session exists, redirect (e.g. for public-only pages).
 */
export async function sessionExistsRedirect(path = "/") {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!!session) {
        redirect(path);
    }

    return null;
}
