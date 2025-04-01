import { Todo } from '@prisma/client';
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
	todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
	const todoPending = todo.completed
		? 'line-through bg-blue-50 rounded-lg shadow-sm p-5 border-dashed border border-blue-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0'
		: 'bg-red-50 rounded-lg shadow-sm p-5 border-dashed border border-red-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0';

	return (
		<div className={todoPending}>
			<div className="flex flex-col sm:flex-row justify-start items-center gap-4 ">
				<div
					className={`flex p-2 rounded-md cursor-pointer ${
						todo.completed
							? 'hover:bg-blue-200'
							: 'hover:bg-red-200'
					} hover:bg-blue-100`}
				>
					{todo.completed ? (
						<IoCheckboxOutline size={30} />
					) : (
						<IoSquareOutline size={30} />
					)}
				</div>

				<div className="text-center sm:text-left">
					{todo.description}
				</div>
			</div>
		</div>
	);
};
