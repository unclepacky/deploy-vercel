import Navbar from "@/app/components/Navbar";
import React from "react";

export default function ManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <Navbar /> */}
      <div>test</div>
      <section className="bg-orange-500 min-h-screen">{children}</section>
    </div>
  );
}
