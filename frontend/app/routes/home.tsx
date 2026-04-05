import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "Home page" }];
}

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <p className="mb-4">Welcome to the minimal frontend setup.</p>
      <Link to="/about" className="text-blue-600 hover:underline">
        Go to About page
      </Link>
    </main>
  );
}
