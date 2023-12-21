import React from "react";

export default function TaskLayout({
  children,
  form,
  list,
}: {
  children: React.ReactNode;
  form: React.ReactNode;
  list: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      {children}
      {form}
      {list}
    </div>
  );
}
