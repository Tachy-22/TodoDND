import { Droppable } from "@hello-pangea/dnd";
import Task from "./Task";

const TaskContainer = ({ data }: { data: DataType }) => {
  return (
    <div className="   mx-auto">
      <Droppable droppableId={data?.id}>
        {(provided) => (
          <div
            className="flex flex-col gap-4 mx-auto"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {data?.todoOrder.map((taskId, index) => {
              const task = data?.todos?.find(
                (todo) => todo.id === taskId
              ) as Todo;
              return <Task key={task?.id} task={task} index={index} data={data} />;
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskContainer;
