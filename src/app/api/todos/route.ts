import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { boolean, object, string } from 'yup';

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

const postSchema = object({
	description: string().required(),
	completed: boolean().optional().default(false),
});

export async function POST(request: Request): Promise<Response> {
	try {
		const { completed, description } = await postSchema.validate(
			await request.json()
		);

		const todo = await prisma.todo.create({
			data: { completed, description },
		});

		return NextResponse.json(todo);
	} catch (error) {
		return NextResponse.json({ messageError: error, status: 400 });
	}
}

export async function DELETE(request: Request): Promise<Response> {
	const todo = await prisma.todo.deleteMany({ where: { completed: true } });

	return NextResponse.json({ message: 'Todos completados eliminados' });
}
