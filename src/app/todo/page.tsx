
import React from "react";
//import updateTodoOrder from "@/controls/prisma/functions/updateTodoOrder";

const TodoRouteMemo = async () => {
  // const sessionUser = await currentUser();
  // console.log("user:", sessionUser);
  // const user = (await userTodos(
  //   sessionUser?.emailAddresses[0].emailAddress as string
  // )) as DataType;
  //const todosOrder = user?.todos?.map((todo) => todo.id) as string[];
  // if (user?.todoOrder.length === 0) {
  //   console.log(
  //     "we use this to update :",
  //     todosOrder,
  //     sessionUser?.emailAddresses[0].emailAddress as string
  //   );
  //   await updateTodoOrder(
  //     todosOrder,
  //     sessionUser?.emailAddresses[0].emailAddress as string
  //   );
  // }

   console.log("ran memoised todo page ");
  return (
    <div className=" p-3  w-full h-full justify-center flex flex-col items-center">
      <div className="uppercase pb-0 p-[1rem] md:text-3xl text-xl font-bold text-blue-900 text-center">
        <h1 className="md:text-3xl text-center font-bold">
          My Todo DRAG N` DROP
        </h1>
      </div>
    </div>
  );
};

const TodoRoute = React.memo(TodoRouteMemo);
export default TodoRoute;
