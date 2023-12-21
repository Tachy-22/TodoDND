import { User } from "@clerk/nextjs/server";
import prisma from "../../../prisma-client/prisma";

async function createUser(email: string, name: string) {
  const user = await prisma.user.create({
    data: {
      email: email,
      name: name,
    },
  });

  //console.log("my user has been registered", user);

  return user;
}

export async function userData(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      email: true,
    },
  });

  // console.log("my user is logged in db", user);

  return user;
}
export async function userTodos(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      todos: true,
    },
  });

  // console.log("my user is logged in db", user);

  return user;
}

const registerUser = async (user: User | null) => {
  if (!!user?.id) {
    console.log("passed first check");
    const isUser = await userData(
      user?.emailAddresses[0]?.emailAddress as string
    );
    const name = `${user?.firstName}${user?.lastName}`;
    if (isUser) {
      console.log("user is already registered");
      return;
    } else {
      console.log("registering user");
      await createUser(user?.emailAddresses[0]?.emailAddress as string, name);
    }
    return;
  } else {
    console.log("didnt pass first check");
  }
};

export default registerUser;
