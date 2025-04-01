import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { Segment } from 'next/dist/server/app-render/types';
import { NextResponse } from 'next/server';
import { boolean, object, string } from 'yup';

interface argsTodo {
	params: {
		id: string;
	};
}

const getTodo = async (id: string): Promise<Todo | null> => {
	const todo = await prisma.todo.findUnique({ where: { id } });

	return todo;
};

export async function GET(
	request: Request,
	{ params }: argsTodo
): Promise<Response> {
	const { id } = params;
	const todo = await getTodo(id);

	if (!todo)
		return NextResponse.json(
			{ error: `El todo con el id ${id} no existe` },
			{ status: 404 }
		);

	return NextResponse.json({ todo });
}

const putSchema = object({
	completed: boolean().optional(),
	description: string().optional(),
});

export async function PUT(request: Request, { params }: Segment) {
	const { id } = params;
	const todo = await getTodo(id);

	if (!todo)
		return NextResponse.json(
			{ error: `El todo con el id ${id} no existe` },
			{ status: 404 }
		);

	try {
		const { completed, description } = await putSchema.validate(
			await request.json()
		);

		const updatedTodo = await prisma.todo.update({
			where: { id: params.id },
			data: { completed, description },
		});

		return NextResponse.json(updatedTodo);
	} catch (error) {
		return NextResponse.json(error, { status: 400 });
	}
}
