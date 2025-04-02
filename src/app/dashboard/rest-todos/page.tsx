import prisma from '@/lib/prisma';
import { NewTodo } from '@/todos/components/NewTodo';
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
		<div className="">
			<div className="w-full px-3 mx-7 mb-5">
				<NewTodo />
			</div>
			<TodosGrid todos={todos} />
		</div>
	);
}
