"use client";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Todo = ({ data }: { data: DataType }) => {
  return (
    <section>
      <TaskForm data={data} />
      <TaskList initialData={data} />
    </section>
  );
};

export default Todo;
