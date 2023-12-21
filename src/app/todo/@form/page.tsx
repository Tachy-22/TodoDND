import React from "react";
import TaskForm from "../../../components/todo/TaskForm";
import { currentUser } from "@clerk/nextjs";
import { userTodos } from "@/controls/prisma/functions/createUser";

const Form = async () => {

  // try {
    
  // } catch (error) {
    
  // }
  const sessionUser = await currentUser();
 // console.log("user:", sessionUser);

  const userData = sessionUser &&(
    await userTodos(sessionUser?.emailAddresses[0]?.emailAddress as string)
  ) as DataType;

  return (
    <>
      <TaskForm data={userData as DataType} />
    </>
  );
};

export default Form;
