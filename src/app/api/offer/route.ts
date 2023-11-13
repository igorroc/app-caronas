import prisma from "db"
import type { NextApiRequest } from "next"
import { NextResponse } from "next/server"

type Data = {
	success: boolean
	info?: any
}

export async function POST(req: Request) {
	let { origin, destination, available_seats, time } = await req.json()

	available_seats = parseInt(available_seats)

	if (!origin || !destination || !available_seats || !time) {
		return NextResponse.json({ success: false, info: "Missing fields" }, { status: 400 })
	}

	const newOffer = await prisma.offer.create({
		data: {
			origin: origin,
			destination: destination,
			available_seats: available_seats,
			time: time,
		},
	})

	return NextResponse.json({ success: true, info: newOffer })
}
