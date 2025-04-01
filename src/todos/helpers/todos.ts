export const updateTodo = async (id: string, completed: boolean) => {
	const body = { completed };

	const todo = await fetch(`/api/todos/${id}`, {
		method: 'PUT',
		body: JSON.stringify(body),
		headers: {
			'Content-type': 'application/json',
		},
	}).then((resp) => resp.json());

	return todo;
};

export const createTodo = async (description: string) => {
	const body = { description };

	const todo = await fetch(`/api/todos`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-type': 'application/json',
		},
	}).then((resp) => resp.json());

	return todo;
};
