import "./styles/output.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      	<body>
      		<header className="bg-red-600 py-3 text-center size-2xl">
				Test header
      		</header>
			{children}
			<footer>
				<div className="bg-red-600 py-3 text-center size-2xl">
					Test footer
				</div>
			</footer>
      	</body>
    </html>
  );
}
