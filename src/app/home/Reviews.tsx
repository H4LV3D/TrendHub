import React from "react";

type Props = {
  reviews: Review[]; // You need to pass an array of Review objects as a prop
};

type Review = {
  name: string;
  techRole: string;
  relation: string;
};

const randomNumber = () => Math.floor(Math.random() * 15) + 1;

function ReviewComponent({ reviews }: Props) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-8 mt-8">
      <div className="flex justify-center items-center">
        <h4 className="text-5xl font-oleo font-medium dark:text-neutral-400 text-black">
          Our Community.
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto xl:w-[950px] gap-6 my-4 sm:my-8">
        {reviews.map((review, index) => (
          <div
            className={`w-full md:max-w-[360px] p-5 sm:p-6 rounded-lg border dark:border-neutral-700 flex-shrink-0 dark:text-white text-black hover:border-black`}
            key={index}
          >
            <div className="flex md:flex-row lg:flex-col items-center lg:items-start space-x-3 lg:space-x-0">
              <img
                src={`/assets/Memoji/male/Memoji-${randomNumber()}.png`}
                className="w-[60px] rounded-rull"
                alt="An SVG illustration of a person dressed in different clothings"
              />
              <div>
                <p className="font-raleway font-medium text-2xl line-clamp-1 dark:text-neutral-500">
                  {review.name}
                </p>
                <span className="font-raleway text-xs sm:text-sm mt-2 dark:text-neutral-600">
                  {review.techRole}
                </span>
              </div>
            </div>
            <p className="font-raleway text-sm sm:text-base mt-2 line-clamp-2 dark:text-neutral-500">
              {review.relation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewComponent;
