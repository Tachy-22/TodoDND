"use client";
import { DropResult } from "@hello-pangea/dnd";
import {
  useCallback,
  useEffect,
  useMemo,
  useOptimistic,
  useTransition,
} from "react";
import updateTodoOrder from "../functions/updateTodoOrder";


const useDragDropContext = (
  initialData: DataType,
  sessionUserEmail: string
) => {
  // const [data, setData] = useState(initialData);
  const data = useMemo(() => initialData, [initialData]);
  const [isPending, startTransition] = useTransition();

  const [optimisticData, addOptimisticData] = useOptimistic<DataType, DataType>(
    data,
    (state: DataType, optimisticData: DataType) => optimisticData
  );

  useEffect(() => {
    console.log("updating optimisticData during taskList component run");
    startTransition(() => {
      addOptimisticData(data);
    });
  }, [data, addOptimisticData]);
  console.log(
    "optimisticData on Task addition or deletion is  :",
    isPending,
    optimisticData
  );

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source, draggableId } = result;

      if (!destination) {
        return;
      }
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      const newTodoOrder = data.todoOrder;
      newTodoOrder?.splice(source.index, 1);
      newTodoOrder?.splice(destination.index, 0, draggableId);

      const optimisticData = {
        ...data,
        todoOrder: newTodoOrder,
      };
      startTransition(() => {
        addOptimisticData(optimisticData);
      });

      updateTodoOrder(newTodoOrder, sessionUserEmail);
      //   setData(newState);
    },
    [addOptimisticData, data, sessionUserEmail]
  );

  console.log("optimisticData on DND :", optimisticData);
  return { optimisticData, handleDragEnd };
};

export default useDragDropContext;
