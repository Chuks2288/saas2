"use client";

import { useState } from "react";

import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";


export default function Home() {

  const {
    data: session,
    isPending,
  } = authClient.useSession()


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = () => {
    authClient.signUp.email({
      name,
      email,
      password
    }, {
      onError: () => {
        window.alert("Something went wrong")
      },
      onSuccess: () => {
        window.alert("Success")
      }
    }
    )
  }
  const onSignIn = () => {
    authClient.signIn.email({
      email,
      password
    }, {
      onError: () => {
        window.alert("Something went wrong")
      },
      onSuccess: () => {
        window.alert("Success")
      }
    }
    )
  }

  if (session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <p>Logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()} className="cursor-pointer">
          Sign Out
        </Button>
      </div>
    )
  }

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 />
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-y-4">
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <Button
          type="submit"
          onClick={onSignUp}
          className="cursor-pointer"
        >
          Create User
        </Button>
      </div>
      <div className="p-4 flex flex-col gap-y-4">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <Button
          type="submit"
          onClick={onSignIn}
          className="cursor-pointer"
        >
          Login
        </Button>
      </div>
    </div>
  );
}
