import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SBB Frontend",
  description: "SBB Frontend Service",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
