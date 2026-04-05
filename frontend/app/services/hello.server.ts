/**
 * Server-side service for the hello API endpoint
 */

import { apiFetch } from "~/utils/http.server";

interface HelloResponse {
  message: string;
}

export async function getHelloMessage(): Promise<HelloResponse> {
  return apiFetch<HelloResponse>("/api/hello");
}
