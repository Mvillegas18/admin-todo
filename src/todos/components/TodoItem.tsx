'use client';

import { Todo } from '@prisma/client';
import { startTransition, useOptimistic } from 'react';
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
	todo: Todo;
	toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
	const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
		todo,
		(state, newCompleteValue: boolean) => ({
			...state,
			completed: newCompleteValue,
		})
	);

	const onToggleTodo = async () => {
		try {
			startTransition(() =>
				toggleTodoOptimistic(!todoOptimistic.completed)
			);

			await toggleTodo(todoOptimistic.id, !todoOptimistic.completed);
		} catch (error) {
			startTransition(() =>
				toggleTodoOptimistic(!todoOptimistic.completed)
			);
		}
	};

	const todoPending = todoOptimistic.completed
		? 'line-through bg-blue-50 rounded-lg shadow-sm p-5 border-dashed border border-blue-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0'
		: 'bg-red-50 rounded-lg shadow-sm p-5 border-dashed border border-red-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0';

	return (
		<div className={todoPending}>
			<div className="flex flex-col sm:flex-row justify-start items-center gap-4 ">
				<div
					// onClick={() =>
					// 	toggleTodo(todoOptimistic.id, !todoOptimistic.completed)
					// }
					onClick={onToggleTodo}
					className={`flex p-2 rounded-md cursor-pointer ${
						todoOptimistic.completed
							? 'hover:bg-blue-200'
							: 'hover:bg-red-200'
					} hover:bg-blue-100`}
				>
					{todoOptimistic.completed ? (
						<IoCheckboxOutline size={30} />
					) : (
						<IoSquareOutline size={30} />
					)}
				</div>

				<div className="text-center sm:text-left">
					{todoOptimistic.description}
				</div>
			</div>
		</div>
	);
};
