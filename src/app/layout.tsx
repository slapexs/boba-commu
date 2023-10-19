import type { Metadata } from "next"
import { Prompt } from "next/font/google"
import "./globals.css"

const prompt = Prompt({
	subsets: ["thai", "latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
	title: "Boba - commu",
	description: "Boba fans playground",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" data-theme="cupcake">
			<body className={prompt.className}>{children}</body>
		</html>
	)
}
