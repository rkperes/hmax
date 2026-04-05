import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/home";
import { getHelloMessage } from "~/services/hello.server";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "Home page" }];
}

export async function loader({ }: Route.LoaderArgs) {
  const data = await getHelloMessage();
  return { message: data.message };
}

export default function Home() {
  const { message } = useLoaderData<typeof loader>();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <p className="mb-4">Welcome to the minimal frontend setup.</p>

      <div className="mb-4">
        <p className="text-lg font-semibold text-green-600">
          Message from API: {message}
        </p>
      </div>

      <Link to="/about" className="text-blue-600 hover:underline">
        Go to About page
      </Link>
    </main>
  );
}
