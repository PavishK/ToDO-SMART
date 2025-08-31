import "./globals.css";
import SessionWrapper from "./SessionWrapper";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "ToDo-Smart",
  description: "An to-do website built by Pc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning={true}
        className={`antialiased`}>
        <SessionWrapper>
        {children}
        </SessionWrapper>
        <Toaster position="top-right"/>
      </body>
    </html>
  );
}
