import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<Response> {
	await prisma.todo.deleteMany({});

	await prisma.todo.createMany({
		data: [
			{
				description: 'Piedra del alma',
				completed: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				description: 'Piedra del infinito',
				completed: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				description: 'Piedra del tiempo',
				completed: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				description: 'Piedra del espacio',
				completed: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				description: 'Piedra de la realidad',
				completed: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		],
	});

	return NextResponse.json({ message: 'Seed executed' });
}
