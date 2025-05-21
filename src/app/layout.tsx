import Navbar from "@/components/Navbar"
import "@/styles/globals.css"

import { type Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Geist, JetBrains_Mono } from "next/font/google"

export const metadata: Metadata = {
	title: "Serie",
	description: "A collection of what you need for Minecraft mod development",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
}

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
})

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
})

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang='en'
			className={`${geist.variable} ${jetbrainsMono.variable}`}>
			<body>
				<ThemeProvider themes={["light", "dark"]} defaultTheme='dark'>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
