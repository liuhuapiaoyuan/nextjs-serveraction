import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "How to use Next.js Server Actions",
  description: " Learn how to use Next.js Server Actions to build server-side rendered applications with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='flex flex-col w-full items-center justify-center h-screen'
      >
        <div className="prose  prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
