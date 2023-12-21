"use server";
import { revalidatePath } from "next/cache";
import prisma from "@/prisma-client/prisma";

export default async function addTodo(body: string, data: DataType) {
  "use server";

  console.log("begining addition of new task");
  const todo = await prisma.todo.create({
    data: {
      body: body,
      todosId: data?.id,
    },
  });

  //update todoOrder when adding a new todo
  console.log("updating task order");
  await updateTodoOrders(data, todo);
  console.log("revalidating path now");
  revalidatePath("/user");
  return todo;
}

export const updateTodoOrders = async (data: DataType, todo: Todo) => {
  "use server";

  await prisma.user.update({
    where: {
      email: data?.email as string,
    },
    data: {
      todoOrder: [...(data?.todoOrder as string[]), todo?.id as string],
    },
  });
};
