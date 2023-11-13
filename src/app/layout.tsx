import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Carona Solidária",
	description:
		"A solução inovadora para estudantes universitários que buscam compartilhar viagens de maneira eficiente e ecológica. Com nosso aplicativo intuitivo, você pode facilmente encontrar ou oferecer caronas, conectando-se com colegas que viajam na mesma direção. Economize custos, reduza sua pegada de carbono e faça novas amizades enquanto viaja para o campus ou eventos. Junte-se à nossa comunidade de caronas compartilhadas e transforme cada jornada em uma aventura mais sustentável e social!",
	icons: [
		
	]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body className={inter.className}>
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
				/>
				{children}
			</body>
		</html>
	)
}
