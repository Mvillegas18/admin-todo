export const updateTodo = async (id: string, completed: boolean) => {
	const body = { completed };

	const todo = await fetch(`/api/todos/${id}`, {
		method: 'PUT',
		body: JSON.stringify(body),
		headers: {
			'Content-type': 'application/json',
		},
	}).then((resp) => resp.json());
	console.log({ todo });

	return todo;
};
