import Link from "next/link";
import Image from "next/image";
import SideNav from "./components/navBar/SideNav";
import "@/public/styles/output.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio de Alexandre Mikhael" />
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio | ALEXANDRE Mikhael</title>
      </head>
      <body className="min-h-full flex relative">
        <div className="flex flex-row w-full">
          <aside className="sticky top-0 z-50 h-screen">
            <SideNav />
            {/* LinkedIn bouton en bas à gauche */}
            <div className="absolute left-4 bottom-4">
              <a
                href="https://www.linkedin.com/in/mikhael-alexandre/"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-lg bg-white flex items-center justify-center w-12 h-12 transition-all"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#0A66C2]"
                >
                  <rect width="24" height="24" rx="4" fill="#0A66C2" />
                  <path
                    d="M7.1 8.6c.8 0 1.3-.6 1.3-1.3 0-.8-.5-1.3-1.3-1.3-.7 0-1.3.5-1.3 1.3 0 .7.6 1.3 1.3 1.3zm-1.1 1.7h2.2v7.1H6V10.3zm4.1 0h2.1v1h.1c.3-.6 1-1.2 2-1.2 2.1 0 2.5 1.4 2.5 3.2v4.1h-2.2v-3.6c0-.9 0-2-1.2-2-1.2 0-1.4.9-1.4 1.9v3.7h-2.2v-7.1zm-6.1 0h2.2v7.1H4V10.3z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
          </aside>
          <main className="flex-grow p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}