import React from "react";

type Props = {};

const SlidingCards = (props: Props) => {
  return (
    <>
      <section className="px-12">
        <div className="max-w-lg mx-auto relative">
          <input
            id="article-01"
            type="radio"
            name="slider"
            className="sr-only peer/01"
          />
          <input
            id="article-02"
            type="radio"
            name="slider"
            className="sr-only peer/02"
          />
          <input
            id="article-03"
            type="radio"
            name="slider"
            className="sr-only peer/03"
            checked
          />
          <input
            id="article-04"
            type="radio"
            name="slider"
            className="sr-only peer/04"
          />
          <input
            id="article-05"
            type="radio"
            name="slider"
            className="sr-only peer/05"
          />

          <div
            className="
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/01:[&_article]:ring
            peer-focus-visible/01:[&_article]:ring-indigo-300
            peer-checked/01:relative
            peer-checked/01:z-50
            peer-checked/01:translate-x-0
            peer-checked/01:scale-100
            peer-checked/01:[&>label]:pointer-events-none
            peer-checked/02:-translate-x-20
            peer-checked/02:scale-[83.75%]
            peer-checked/02:z-40
            peer-checked/03:-translate-x-40
            peer-checked/03:z-30
            peer-checked/04:-translate-x-40                    
            peer-checked/04:opacity-0
            peer-checked/05:-translate-x-40
        "
          >
            <label className="absolute inset-0" htmlFor="article-01">
              <span className="sr-only">Focus on the big picture</span>
            </label>
            <article className="bg-white p-6 rounded-lg shadow-2xl">
              <header className="mb-2">
                <img
                  className="inline-flex rounded-full shadow mb-3"
                  src="/assets/Memoji/female/Memoji-6.png"
                  width="44"
                  height="44"
                  alt="Icon"
                />
                <h1 className="text-xl font-bold text-slate-900">
                  Focus on the big picture
                </h1>
              </header>
              <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
                <p>
                  Many desktop publishing packages and web page editors now use
                  Pinky as their default model text, and a search for more
                  variants will uncover many web sites still in their infancy.
                </p>
                <p>
                  All the generators tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
              </div>
              <footer className="text-right">
                <a
                  className="text-sm font-medium text-indigo-500 hover:underline"
                  href="#0"
                >
                  Read more
                </a>
              </footer>
            </article>
          </div>

          <div
            className="
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/02:[&_article]:ring
            peer-focus-visible/02:[&_article]:ring-indigo-300                        
            peer-checked/01:translate-x-20
            peer-checked/01:scale-[83.75%]
            peer-checked/01:z-40
            peer-checked/02:relative
            peer-checked/02:z-50
            peer-checked/02:translate-x-0
            peer-checked/02:scale-100
            peer-checked/02:[&>label]:pointer-events-none
            peer-checked/03:-translate-x-20
            peer-checked/03:scale-[83.75%]
            peer-checked/03:z-40
            peer-checked/04:-translate-x-40
            peer-checked/04:z-30
            peer-checked/05:-translate-x-40 
            peer-checked/05:opacity-0
        "
          >
            <label className="absolute inset-0" htmlFor="article-02">
              <span className="sr-only">Focus on the big picture</span>
            </label>
            <article className="bg-white p-6 rounded-lg shadow-2xl">
              <header className="mb-2">
                <img
                  className="inline-flex rounded-full shadow mb-3"
                  src="./icon.svg"
                  width="44"
                  height="44"
                  alt="Icon"
                />
                <h1 className="text-xl font-bold text-slate-900">
                  Focus on the big picture
                </h1>
              </header>
              <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
                <p>
                  Many desktop publishing packages and web page editors now use
                  Pinky as their default model text, and a search for more
                  variants will uncover many web sites still in their infancy.
                </p>
                <p>
                  All the generators tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
              </div>
              <footer className="text-right">
                <a
                  className="text-sm font-medium text-indigo-500 hover:underline"
                  href="#0"
                >
                  Read more
                </a>
              </footer>
            </article>
          </div>

          <div
            className="
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/03:[&_article]:ring
            peer-focus-visible/03:[&_article]:ring-indigo-300                          
            peer-checked/01:translate-x-40
            peer-checked/01:z-30
            peer-checked/02:translate-x-20
            peer-checked/02:scale-[83.75%]
            peer-checked/02:z-40
            peer-checked/03:relative
            peer-checked/03:z-50
            peer-checked/03:translate-x-0
            peer-checked/03:scale-100
            peer-checked/03:[&>label]:pointer-events-none
            peer-checked/04:-translate-x-20
            peer-checked/04:scale-[83.75%]
            peer-checked/04:z-40
            peer-checked/05:-translate-x-40
            peer-checked/05:z-30                  
        "
          >
            <label className="absolute inset-0" htmlFor="article-03">
              <span className="sr-only">Focus on the big picture</span>
            </label>
            <article className="bg-white p-6 rounded-lg shadow-2xl">
              <header className="mb-2">
                <img
                  className="inline-flex rounded-full shadow mb-3"
                  src="./icon.svg"
                  width="44"
                  height="44"
                  alt="Icon"
                />
                <h1 className="text-xl font-bold text-slate-900">
                  Focus on the big picture
                </h1>
              </header>
              <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
                <p>
                  Many desktop publishing packages and web page editors now use
                  Pinky as their default model text, and a search for more
                  variants will uncover many web sites still in their infancy.
                </p>
                <p>
                  All the generators tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
              </div>
              <footer className="text-right">
                <a
                  className="text-sm font-medium text-indigo-500 hover:underline"
                  href="#0"
                >
                  Read more
                </a>
              </footer>
            </article>
          </div>

          <div
            className="
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/04:[&_article]:ring
            peer-focus-visible/04:[&_article]:ring-indigo-300                          

            peer-checked/01:translate-x-40 
            peer-checked/01:opacity-0
            
            peer-checked/02:translate-x-40
            peer-checked/02:z-30
            
            peer-checked/03:translate-x-20
            peer-checked/03:scale-[83.75%]
            peer-checked/03:z-40

            peer-checked/04:relative
            peer-checked/04:z-50
            peer-checked/04:translate-x-0
            peer-checked/04:scale-100
            peer-checked/04:[&>label]:pointer-events-none
            
            peer-checked/05:-translate-x-20
            peer-checked/05:scale-[83.75%]
            peer-checked/05:z-40
        "
          >
            <label className="absolute inset-0" htmlFor="article-04">
              <span className="sr-only">Focus on the big picture</span>
            </label>
            <article className="bg-white p-6 rounded-lg shadow-2xl">
              <header className="mb-2">
                <img
                  className="inline-flex rounded-full shadow mb-3"
                  src="./icon.svg"
                  width="44"
                  height="44"
                  alt="Icon"
                />
                <h1 className="text-xl font-bold text-slate-900">
                  Focus on the big picture
                </h1>
              </header>
              <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
                <p>
                  Many desktop publishing packages and web page editors now use
                  Pinky as their default model text, and a search for more
                  variants will uncover many web sites still in their infancy.
                </p>
                <p>
                  All the generators tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
              </div>
              <footer className="text-right">
                <a
                  className="text-sm font-medium text-indigo-500 hover:underline"
                  href="#0"
                >
                  Read more
                </a>
              </footer>
            </article>
          </div>

          <div
            className="
            absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            peer-focus-visible/05:[&_article]:ring
            peer-focus-visible/05:[&_article]:ring-indigo-300                          
            peer-checked/01:translate-x-40 
            peer-checked/02:translate-x-40 
            peer-checked/02:opacity-0
            peer-checked/03:translate-x-40
            peer-checked/03:z-30
            peer-checked/04:translate-x-20
            peer-checked/04:scale-[83.75%]
            peer-checked/04:z-40
            peer-checked/05:relative
            peer-checked/05:z-50
            peer-checked/05:translate-x-0
            peer-checked/05:scale-100
            peer-checked/05:[&>label]:pointer-events-none
        "
          >
            <label className="absolute inset-0" htmlFor="article-05">
              <span className="sr-only">Focus on the big picture</span>
            </label>
            <article className="bg-white p-6 rounded-lg shadow-2xl">
              <header className="mb-2">
                <img
                  className="inline-flex rounded-full shadow mb-3"
                  src="./icon.svg"
                  width="44"
                  height="44"
                  alt="Icon"
                />
                <h1 className="text-xl font-bold text-slate-900">
                  Focus on the big picture
                </h1>
              </header>
              <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
                <p>
                  Many desktop publishing packages and web page editors now use
                  Pinky as their default model text, and a search for more
                  variants will uncover many web sites still in their infancy.
                </p>
                <p>
                  All the generators tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
              </div>
              <footer className="text-right">
                <a
                  className="text-sm font-medium text-indigo-500 hover:underline"
                  href="#0"
                >
                  Read more
                </a>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default SlidingCards;
