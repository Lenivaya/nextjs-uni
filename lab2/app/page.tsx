import { env } from "@/env";
import { ClientEnvDisplay } from "./components/ClientEnvDisplay";

export default function Home() {
  console.log("Server-side environment variables:", {
    DATABASE_URL: env.DATABASE_URL,
    OPEN_AI_API_KEY: env.OPEN_AI_API_KEY,
    NEXT_PUBLIC_API_URL: env.NEXT_PUBLIC_API_URL,
  });

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-6">Environment Variables Demo</h1>

      {/* Server-side rendered values */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Server-Side Environment Variables:
        </h2>
        <pre className="bg-gray-800 p-4 rounded border border-gray-700 text-gray-100">
          {JSON.stringify(
            {
              DATABASE_URL: env.DATABASE_URL,
              OPEN_AI_API_KEY: env.OPEN_AI_API_KEY,
            },
            null,
            2
          )}
        </pre>
      </div>

      {/* Client-side values */}
      <ClientEnvDisplay />
    </div>
  );
}
