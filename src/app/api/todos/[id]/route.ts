import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

interface argsTodo {
	params: {
		id: string;
	};
}

export async function GET(
	request: Request,
	{ params }: argsTodo
): Promise<Response> {
	const todoId = params.id;
	const todo = await prisma.todo.findUnique({ where: { id: todoId } });

	if (!todo)
		return NextResponse.json({
			error: `El todo con el id ${todoId} no existe`,
		});

	return NextResponse.json({ todo });
}
