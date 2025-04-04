'use client';

import * as todosApi from '@/todos/helpers/todos';
import { Todo } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { TodoItem } from './TodoItem';
import { toggleTodo } from '../actions/todo-actions';

interface Props {
	todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
	const router = useRouter();

	// const toggleTodo = async (id: string, completed: boolean) => {
	// 	const updatedTodo = await todosApi.updateTodo(id, completed);

	// 	router.refresh();
	// };
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
			))}
		</div>
	);
};
