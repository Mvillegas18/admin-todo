export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from '@/lib/prisma';
import { NewTodo } from '@/todos/components/NewTodo';
import { TodosGrid } from '@/todos/components/TodosGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Server actions',
	description: 'Descripcion de server actions',
};

export default async function ServerActions() {
	const todos = await prisma.todo.findMany({
		orderBy: { description: 'asc' },
	});
	console.log('construido');

	return (
		<>
			<span className="text-3xl mb-10">Server Actions</span>
			<div className="w-full px-3 mx-5 mb-5">
				<NewTodo />
			</div>

			<TodosGrid todos={todos} />
		</>
	);
}
