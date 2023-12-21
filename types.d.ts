type DataType = {
  id: string;
  name: string;
  email: string;
  todos: Todo[];
  todoOrder: string[];
};

type Todo = {
  id?: string;
  body: string;
  todosId?: string;
};
