import React from "react";

type Props = {};

const drafts = [
  {
    id: 1,
    title: "The message, medium & media.",
    description:
      "leverage diverse mediums, and harness the power of media to forge authentic connections and catalyze cultural conversations. We are the intersection of culture, creativity, and technology, we are a global collective of cultural engineers building the future of brand marketing and communications. ",
    image: "/images/1.jpg",
    date: "12/12/2021",
    time: "12:00",
  },
  {
    id: 2,
    title: "The message, medium & media.",
    description:
      "leverage diverse mediums, and harness the power of media to forge authentic connections and catalyze cultural conversations. We are the intersection of culture, creativity, and technology, we are a global collective of cultural engineers building the future of brand marketing and communications. ",
    image: "/images/1.jpg",
    date: "12/12/2021",
    time: "12:00",
  },
  {
    id: 3,
    title: "The message, medium & media.",
    description:
      "leverage diverse mediums, and harness the power of media to forge authentic connections and catalyze cultural conversations. We are the intersection of culture, creativity, and technology, we are a global collective of cultural engineers building the future of brand marketing and communications. ",
    image: "/images/1.jpg",
    date: "12/12/2021",
    time: "12:00",
  },
  {
    id: 4,
    title: "The message, medium & media.",
    description:
      "leverage diverse mediums, and harness the power of media to forge authentic connections and catalyze cultural conversations. We are the intersection of culture, creativity, and technology, we are a global collective of cultural engineers building the future of brand marketing and communications. ",
    image: "/images/1.jpg",
    date: "12/12/2021",
    time: "12:00",
  },
  {
    id: 5,
    title: "The message, medium & media.",
    description:
      "leverage diverse mediums, and harness the power of media to forge authentic connections and catalyze cultural conversations. We are the intersection of culture, creativity, and technology, we are a global collective of cultural engineers building the future of brand marketing and communications. ",
    image: "/images/1.jpg",
    date: "12/12/2021",
    time: "12:00",
  },
  {
    id: 6,
    title: "The message, medium & media.",
    description:
      "leverage diverse mediums, and harness the power of media to forge authentic connections and catalyze cultural conversations. We are the intersection of culture, creativity, and technology, we are a global collective of cultural engineers building the future of brand marketing and communications. ",
    image: "/images/1.jpg",
    date: "12/12/2021",
    time: "12:00",
  },
];

function Drafts({}: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 my-5">
      {drafts.map((draft) => (
        <div
          className="p-4 border dark:border-neutral-700 hover:border-black cursor-pointer rounded-lg "
          key={draft.id}
        >
          <h1 className="font-[500] text-xl dark:text-neutral-300 ">
            {draft.title}
          </h1>
          <p className="text-sm mt-2 text-neutral-500 dark:text-neutral-400 ">
            {draft.description}
          </p>
          <div className="flex justify-between my-2 dark:text-neutral-400">
            <p>{draft.date}</p>
            <p>{draft.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Drafts;
