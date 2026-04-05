import { Link } from "react-router";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }, { name: "description", content: "About page" }];
}

export default function About() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="mb-4">This is a minimal frontend setup with routing.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Back to Home
      </Link>
    </main>
  );
}
