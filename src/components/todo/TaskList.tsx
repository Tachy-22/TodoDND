"use client";
import { DragDropContext } from "@hello-pangea/dnd";
import TaskContainer from "./TaskContainer";
import useDragDropContext from "@/controls/prisma/hooks/useDragDropContext";
import { useUser } from "@clerk/nextjs";

const TaskList = ({ initialData }: { initialData: DataType }) => {
  const { user } = useUser();
  const { optimisticData, handleDragEnd } = useDragDropContext(
    initialData,
    user?.emailAddresses[0].emailAddress as string
  );
  console.log("Ran task List Component");

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <TaskContainer data={optimisticData} />
    </DragDropContext>
  );
};

export default TaskList;
