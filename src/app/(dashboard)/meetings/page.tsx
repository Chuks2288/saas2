import { noSessionRedirect } from "@/lib/session";
import React from "react";

const Page = async () => {
  const session = await noSessionRedirect();
  return <div>Meetings Page</div>;
};

export default Page;
