"use server";
import { revalidatePath } from "next/cache";
import prisma from "@/prisma-client/prisma";

export default async function deleteTodo(id: string, data: DataType) {
  "use server";

  console.log("begining deletion of new task");
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });

  await updateTodoOrdersAfterDelete(data, id);
  revalidatePath("/@listone");

  return;
}

export const updateTodoOrdersAfterDelete = async (
  data: DataType,
  id: string
) => {
  "use server";

  const newTodoOrder = data?.todoOrder.filter((todoId) => todoId !== id);

  await prisma.user.update({
    where: {
      email: data?.email as string,
    },
    data: {
      todoOrder: newTodoOrder,
    },
  });
  console.log("task deleted");
  revalidatePath("/@listone");
};
