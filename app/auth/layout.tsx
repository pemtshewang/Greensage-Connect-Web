import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-image flex items-center justify-center h-screen">
      {children}
    </div>
  );
}
