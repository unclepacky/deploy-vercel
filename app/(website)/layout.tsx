import React from "react";
import Navbar from "../components/Navbar";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <section className="bg-amber-500 min-h-screen">{children}</section>
    </div>
  );
}
