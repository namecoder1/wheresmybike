import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link"
import { SiInstagram } from "react-icons/si";
import logo from '@/assets/images/wmb-logo.png';

const Construction = () => {
	return (
		<div className="min-h-[90vh] flex items-center justify-center flex-col mx-5">
		<h2 className="underline underline-offset-2 text-2xl mb-3 font-bold">Where's My Bike</h2>
		<Image src={logo} alt="WMB Logo" width={100} height={100} className="mb-6" />
		<div className="flex flex-col items-center justify-center mb-4">
			<h1 className="text-4xl font-semibold mb-1">Il sito è in costruzione</h1>
			<p className="text-center">Resta aggiornato sui nostri social per scoprire quando WheresMyBike sarà disponibile al pubblico.</p>
		</div>
		<Button asChild>
			<Link href='https://www.instagram.com/wmb.pesaro/' target="_blank"><SiInstagram className="mr-2 inline-block" /> Seguici su Instagram</Link>
		</Button>
	</div>
	)
}

export default Construction