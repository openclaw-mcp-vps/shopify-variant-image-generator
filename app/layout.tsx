import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VariantAI – Auto-Generate Product Variant Images",
  description: "AI-powered product variant image generation for Shopify. Upload one base photo, get unlimited color and style variants with consistent lighting and perspective."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="79d4ffbf-91a1-42de-a9b8-39234ee2b518"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
