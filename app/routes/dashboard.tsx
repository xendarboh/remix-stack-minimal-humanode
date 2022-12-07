import type { LoaderArgs } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";

import { requireAuthenticatedUser } from "~/auth.server";

export async function loader({ request }: LoaderArgs) {
  const auth = await requireAuthenticatedUser(request);
  return { auth };
}

export default function Dashboard() {
  const { auth } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Welcome to the Dashboard... you auth'd user!
      </h1>
      <h3>humanode identifer = {auth.id}</h3>
      <br />
      <ul className="list-disc">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
      <br />
      <pre>{JSON.stringify(auth, null, 2)}</pre>
    </div>
  );
}
