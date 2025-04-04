'use server';

import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const toggleTodo = async (
	id: string,
	completed: boolean
): Promise<Todo> => {
	const todo = await prisma.todo.findFirst({ where: { id } });

	if (!todo) {
		throw `Todo con ${id} no encontrado`;
	}

	const updatedTodo = await prisma.todo.update({
		where: { id },
		data: { completed },
	});

	revalidatePath('/dashboard/server-todos');
	return updatedTodo;
};

export const addTodo = async (
	description: string
): Promise<Todo | { message: string }> => {
	try {
		const todo = await prisma.todo.create({
			data: { description },
		});

		revalidatePath('/dashboard/server-todos');

		return todo;
	} catch (error) {
		return {
			message: 'Error al crear un todo',
		};
	}
};

export const deleteCompleted = async () => {
	try {
		const todo = await prisma.todo.deleteMany({
			where: { completed: true },
		});

		revalidatePath('/dashboard/server-todos');
		return todo;
	} catch (error) {
		return {
			message: 'Error al eliminar los todos completados',
		};
	}
};
