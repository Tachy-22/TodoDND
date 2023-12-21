"use client";
import {
  FiEdit,
  FiTrash,
  FiShare,
  FiPlusSquare,
  FiChevronsDown,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import React from "react";
import Link from "next/link";

const DropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" flex items-center justify-center ">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-full text-indigo-50 bg-indigo-500 hover:bg-indigo-400 transition-colors"
        >
          <span className="font-medium text-sm">Menu</span>
          <motion.span variants={iconVariants}>
            <FiChevronsDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col bg-white gap-2 p-2 rounded-lg shadow-xl absolute z-20 top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <Option href="/" setOpen={setOpen} Icon={FiEdit}>
            home
          </Option>
          <Option href="/todo" setOpen={setOpen} Icon={FiPlusSquare}>
            {" "}
            todos
          </Option>
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({
  Icon,
  setOpen,
  children,
  href,
}: {
  Icon: IconType;
  href: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointerr"
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span className="w-full">{children}</span>
      </motion.li>
    </Link>
  );
};

export default DropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
