import React from "react";
import Alert from "ui/alert";
import Footer from "ui/footer";

export default function Layout({
  preview,
  children,
}: {
  preview: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen">
        {process.env.NODE_ENV === "development" ? (
          <Alert preview={preview} />
        ) : null}
        <main className="container">{children}</main>
      </div>
      <Footer />
    </>
  );
}
