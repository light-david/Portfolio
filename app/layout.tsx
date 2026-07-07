import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "David Arorote | Full-Stack Developer & Data Engineer",
  description:
    "Portfolio of David Arorote — Full-Stack Developer & Data Engineer specializing in cloud infrastructure, machine learning, and statistical data analysis.",
  keywords: [
    "David Arorote", "Full-Stack Developer", "Data Engineer",
    "Cloud", "AWS", "GCP", "Python", "React", "Machine Learning",
  ],
  authors: [{ name: "David Arorote" }],
  openGraph: {
    title: "David Arorote | Full-Stack Developer & Data Engineer",
    description: "Building at the edge of data & cloud.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans bg-deep-space text-text-primary`}>
        {children}
      </body>
    </html>
  );
}
