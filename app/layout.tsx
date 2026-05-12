import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Repasa Conocimiento: La energía",
  description: "Quiz de Conocimiento del Medio para practicar materia, calor y energía."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
