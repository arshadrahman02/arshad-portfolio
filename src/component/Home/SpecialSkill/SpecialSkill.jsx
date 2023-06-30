import React from "react";

const SpecialSkill = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-mono   text-white mt-16">
          I SPECIALIZE IN
        </h1>

        <h1 className="text-2xl font-medium text-cyan-400  ">__________</h1>
        <p className="text-base text-white mt-5 font-mono">
          Programming as well as creating websites and designing.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 text-white  mt-14 mx-5">
        <div className="lg:mx-10">
          <h1 className="mx-0 text-2xl">CONCEPT</h1>
          <p className="font-mono text-sm mt-5">
            Concepts provide background that helps readers understand essential
            information about a product,a task,a process,or any other conceptual
            or descriptive information. I try to gather these do my works.
          </p>
        </div>
        <div className="lg:mx-10 lg:mt-0 mt-10">
          <h1 className=" text-2xl mx-0">WEB DEVELOPMENT</h1>
          <p className="font-mono text-sm mt-5">
            I'm a planner who codes. I've worked in-house, and distantly on
            ventures. I care profoundly about making top notch, valuable, and
            wonderful items that help individuals and have any kind of effect.
          </p>
        </div>
        <div className="mt-10 lg:mt-0">
          <h1 className="mx-0 text-2xl">MERN STACK </h1>
          <p className="font-mono text-sm mt-5">
            MERN stack refers to a collection of popular technologies used for
            developing web applications. It consists of MongoDB, a NoSQL
            database; Express.js and Node.js, a runtime environment for
            executing JavaScript on the server side.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialSkill;
