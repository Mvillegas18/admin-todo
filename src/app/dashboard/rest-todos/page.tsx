import prisma from '@/lib/prisma';
import { TodosGrid } from '@/todos/components/TodosGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'List of todos',
	description: 'SEO list of todos',
};

export default async function RestTodosPage() {
	const todos = await prisma.todo.findMany({
		orderBy: { description: 'asc' },
	});

	return (
		<div>
			<TodosGrid todos={todos} />
		</div>
	);
}
