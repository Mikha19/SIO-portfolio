import Link from "next/link";
import Image from "next/image"
import SideNav from "./ui/SideNav";
import "./styles/output.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
		<head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content="Portfolio de Alexandre Mikhael" />
			<link rel="icon" href="/favicon.ico" />
			<title>Portfolio | ALEXANDRE Mikhael</title>
			<link rel="stylesheet" href="/styles/output.css" />
		</head>
      	<body className="min-h-screen flex flex-col justify-between">
      		<header className="flex space-x-24 text-center text-2xl">
				<SideNav />
      		</header>
			{children}
      	</body>
    </html>
  );
}
