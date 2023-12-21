import deleteTodo from "@/controls/prisma/functions/deleteTodo";
import { Draggable } from "@hello-pangea/dnd";
import { RiDeleteBin6Line } from "react-icons/ri";

import React from "react";
import SubmitButton from "./SubmitButton";

const Task = ({
  task,
  index,
  data,
}: {
  task: Todo;
  index: number;
  data: DataType;
}) => {
  return (
    <Draggable draggableId={task?.id as string} index={index}>
      {(provided, snapshot) => (
        <div
          className={` ${
            snapshot.isDragging ? "drop-shadow-xl scale-105" : ""
          }  rounded-md p-2 px-3 bg-slate-200   w-full text-md   flex justify-between items-center "`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p className="">{task?.body}</p>

          <form
            action={async () => {
              await deleteTodo(task?.id as string, data);
            }}
            className=""
          >
            <SubmitButton className="text-red-500  p-1 hover:bg-red-300/30">
              <RiDeleteBin6Line className="text-xl text-red-500" />
            </SubmitButton>
          </form>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
