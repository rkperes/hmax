/**
 * Base HTTP client for server-side requests (loaders, actions)
 * Used to fetch from backend APIs
 */

const API_BASE_URL = process.env.API_URL || "http://localhost:8080";

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Response(`API Error: ${response.statusText}`, {
      status: response.status,
    });
  }

  return response.json();
}
