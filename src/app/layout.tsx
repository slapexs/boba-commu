import type { Metadata } from "next"
import { Prompt, Bai_Jamjuree } from "next/font/google"

import "./globals.css"

// Components
import Navbar from "@/components/Navbar"

const BaiJamjuree = Bai_Jamjuree({
	subsets: ["thai", "latin"],
	weight: ["200", "300", "400", "500", "600", "700"],
	// weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
			<body className={BaiJamjuree.className}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
