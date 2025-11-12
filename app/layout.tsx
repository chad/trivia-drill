import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trivia Drill - Master General Knowledge",
  description: "Master general knowledge for pub trivia using scientifically-proven learning techniques including spaced repetition, active recall, and interleaving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
