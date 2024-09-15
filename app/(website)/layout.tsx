import React from "react";
import Navbar from "../components/Navbar";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="bg-slate-300 flex grow justify-center items-center">
        {children}
      </section>
    </div>
  );
}
