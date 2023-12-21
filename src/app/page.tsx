import registerUser from "@/controls/prisma/functions/createUser";
import { currentUser } from "@clerk/nextjs";
import React from "react";
import FuzzyOverlay from "@/components/home/FuzzyOverlay";

const Home = async () => {
  const user = await currentUser();
  user && (await registerUser(user));
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className=" ">
      <div className="">Home</div>
      {/* <FuzzyOverlay /> */}
    </div>
  );
};

export default Home;
