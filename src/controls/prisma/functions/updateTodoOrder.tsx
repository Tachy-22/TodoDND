"use server"
import { revalidatePath } from "next/cache";
import prisma from "../../../prisma-client/prisma";

export default async function updateTodoOrder(
  todoOrder: string[],
  email: string
) {
  console.log("updating todo order");
  const todo = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      todoOrder: todoOrder,
    },
  });

  console.log("my todo order has been updated", todo);
  revalidatePath("/user");
  return;
}
