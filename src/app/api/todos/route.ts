import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<Response> {
	const { searchParams } = new URL(request.url);
	const takeTodo = Number(searchParams.get('take') ?? '10');

	const { searchParams: searchParams2 } = new URL(request.url);
	const skipTodo = Number(searchParams2.get('skip') ?? '0');

	if (isNaN(takeTodo))
		return NextResponse.json(
			{ error: 'Invalid take parameter' },
			{ status: 400 }
		);

	if (isNaN(skipTodo))
		return NextResponse.json(
			{ error: 'Invalid skip parameter' },
			{ status: 400 }
		);

	const todos = await prisma.todo.findMany({
		take: takeTodo,
		skip: skipTodo,
	});

	return NextResponse.json({ todos: todos });
}

export async function POST(request: Request): Promise<Response> {
	const body = await request.json();

	const todo = await prisma.todo.create({ data: body });

	return NextResponse.json(todo);
}
