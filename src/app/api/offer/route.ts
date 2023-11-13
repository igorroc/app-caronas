export async function POST(request: Request, response: Response) {
	const data = await request.json()
	console.log(data)

	return Response.json({ message: "Hello World" })
}
