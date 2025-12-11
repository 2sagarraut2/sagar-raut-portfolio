import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sagar Raut | Senior Software Engineer",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Portfolio of Sagar Raut - Senior Software Engineer specializing in React, Node.js, and full-stack development",
  keywords: [
    "Sagar Raut",
    "Software Engineer",
    "React",
    "Node.js",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Sagar Raut" }],
  openGraph: {
    title: "Sagar Raut | Senior Software Engineer",
    description:
      "Portfolio showcasing projects and experience in full-stack development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
