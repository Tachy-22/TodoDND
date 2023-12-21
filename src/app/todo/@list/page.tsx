import { currentUser } from "@clerk/nextjs";
import TaskList from "../../../components/todo/TaskList";
import { userTodos } from "@/controls/prisma/functions/createUser";

const List = async () => {
  const sessionUser = await currentUser();
 // console.log("user:", sessionUser);

  const user = (await userTodos(
    sessionUser?.emailAddresses[0]?.emailAddress as string
  )) as DataType;

//  console.log("user list update:", user);
  return (
    <div className="bg-rd-400 w-full px-2 md:w-[45rem] ">
      <TaskList initialData={user} />
    </div>
  );
};

export default List;
