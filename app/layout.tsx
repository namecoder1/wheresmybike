import '@/assets/globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
	title: "Where's My Bike",
  description: 'Aiuta gli altri a ritrovare la propria bici!',
}

const MainLayout = ({ children }: Readonly<{children: React.ReactNode}>) => {
	return (
		<html>
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	)
}

export default MainLayout