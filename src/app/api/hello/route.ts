import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<Response> {
	return NextResponse.json({ message: 'Hello, World!' });
}
