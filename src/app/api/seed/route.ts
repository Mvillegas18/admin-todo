import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<Response> {
	await prisma.todo.deleteMany({});

	await prisma.todo.createMany({
		data: [
			{
				description: 'Todo 1',
				completed: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				description: 'Todo 2',
				completed: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				description: 'Todo 3',
				completed: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				description: 'Todo 4',
				completed: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				description: 'Todo 5',
				completed: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		],
	});

	return NextResponse.json({ message: 'Seed executed' });
}
