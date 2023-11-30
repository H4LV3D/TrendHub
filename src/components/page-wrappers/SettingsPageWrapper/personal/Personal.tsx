import React, { useState } from "react";

const Personal = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [about, setAbout] = useState(
    "Technical Writer, Content Creator, and Software Developer."
  );
  return (
    <>
      <div className="coponent w-2/3 mt-6">
        <label htmlFor="" className="text-[#696969] ">
          Name
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="w-[380px] border dark:border-neutral-700 text-[#696969] focus:text-black focus:border-black rounded-lg px-3 h-[3rem] outline-none bg-transparent"
            placeholder="John Doe"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name !== "John Doe" && (
            <button className="text-sm text-white bg-black px-8 h-[3rem] rounded-lg">
              <span>Save</span>
            </button>
          )}
        </div>
      </div>
      <div className="coponent w-2/3 mt-6">
        <label htmlFor="" className="text-[#696969] ">
          Email
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="w-[380px] border dark:border-neutral-700 text-[#696969] focus:text-black focus:border-black rounded-lg px-3 h-[3rem] outline-none bg-transparent"
            placeholder="John Doe"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email !== "johndoe@gmail.com" && (
            <button className="text-sm text-white bg-black px-8 h-[3rem] rounded-lg">
              <span>Save</span>
            </button>
          )}
        </div>
      </div>
      <div className="coponent w-2/3 mt-6">
        <label htmlFor="" className="text-[#696969] ">
          Title / Position / Company
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="w-[380px] border dark:border-neutral-700 text-[#696969] focus:text-black focus:border-black rounded-lg px-3 h-[3rem] outline-none bg-transparent"
            placeholder="John Doe"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name !== "John Doe" && (
            <button className="text-sm text-white bg-black px-8 h-[3rem] rounded-lg">
              <span>Save</span>
            </button>
          )}
        </div>
      </div>
      <div className="coponent w-2/3 mt-6">
        <label htmlFor="" className="text-[#696969] ">
          About
        </label>
        <div className="flex items-center space-x-4">
          <textarea
            name=""
            id=""
            cols={4}
            rows={6}
            className="w-[380px] border dark:border-neutral-700 bg-transparent text-sm text-[#696969] focus:text-black focus:border-black rounded-lg p-3  outline-none"
            placeholder={about}
            defaultValue={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
          {about !==
            "Technical Writer, Content Creator, and Software Developer." && (
            <button className="text-sm text-white bg-black px-8 h-[3rem] rounded-lg">
              <span>Save</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Personal;
