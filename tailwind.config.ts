import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { navy: "#0B1B3A", slate: "#0F172A", ink: "#0B1220" }
      },
      boxShadow: {
        soft: "0 12px 30px rgba(2, 6, 23, 0.08)",
        card: "0 10px 28px rgba(2, 6, 23, 0.10)",
        ring: "0 0 0 6px rgba(30, 58, 138, 0.15)"
      }
    }
  },
  plugins: []
} satisfies Config;
