"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <div className="flex flex-col items-center justify-center min-h-svh gap-6">
      <p className="text-2xl">Apps/widget</p>
      <Button onClick={() => addUser()}>Add user</Button>
      <div className="max-w-sm w-full">{JSON.stringify(users, null, 2)}</div>
    </div>
  );
}
