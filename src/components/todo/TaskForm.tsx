"use client";
import { useCallback, useRef, useState } from "react";
import SubmitButton from "./SubmitButton";
import { MutableRefObject } from "react";
import addTodo from "@/controls/actions/addTodo";

const TaskForm = ({ data }: { data: DataType }) => {
  const formRef: MutableRefObject<HTMLFormElement | null> = useRef(null);
  console.log("data :");

  const handleClick = useCallback(() => {}, []);

  return (
    <form
      ref={formRef}
      action={async (formData: FormData) => {
        const body = formData.get("task") as string;
        addTodo(body, data);
        if (formRef.current !== null) {
          formRef.current.reset();
        }
        console.log("passed here");
      }}
      className="flex md:gap-1 gap-[0.1rem]  justify-center h-fit  items-center"
    >
      <div className=" px-3 ">
        <label htmlFor="task" className="" />
        <input
          type="text"
          className="text border rounded-md p-2 px-3 md:w-[35rem] w-full outline-none bg-white"
          name="task"
          id="task"
        />
      </div>
      <div className="" onClick={handleClick}>
        <SubmitButton className="bg-blue-400 md:w-[6rem] w-full md:text-md text-sm">
          Add todo
        </SubmitButton>
      </div>
    </form>
  );
};

export default TaskForm;
