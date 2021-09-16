import { useState } from "react";
import Container from "./Container";
import Link from "next/link";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);
  const dropdownList = [
    { text: "Interet", href: "/posts" },
    { text: "Open Source", href: "/posts" },
    { text: "Course", href: "/posts" },
  ];

  return (
    <nav className="py-10">
      {/* setting container */}
      <Container>
        {/* setting biar navigasinya ga ke bawah atau biar itemnya ke samping berderetnya */}
        <div className="flex items-center">
          <div className="w-3/12 lg:hidden">
            <button onClick={() => setOffcanvas(!offcanvas)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M3 12H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          {/* setting lebar ( w artinya lebar 2/12 berarti membagi container ke 2 bagian dari 12 bagian ) */}
          <div className="lg:w-2/12 w-6/12 ">
            <Link href="/">
              <a className="flex items-center justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-3">
                  E
                </div>
                Epicweb
              </a>
            </Link>
          </div>
          <div className="w-3/12 lg:hidden text-right">
            <button onClick={() => setSearch(!search)}>
              <svg
                className="inline-block"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div
            className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ${
              offcanvas ? "left-0" : "-left-full"
            }`}
          >
            <button
              className="absolute top-10 right-10 lg:hidden"
              onClick={() => setOffcanvas(false)}
            >
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="16.2929"
                  y1="15.7071"
                  x2="1.29289"
                  y2="0.707106"
                  stroke="#68707C"
                  strokeWidth="2"
                />
                <line
                  y1="-1"
                  x2="21.2132"
                  y2="-1"
                  transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 1 15)"
                  stroke="#68707C"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <ul className="lg:space-x-10 flex lg:items-center flex-col lg:flex-row space-y-5 lg:space-y-0">
              <li>
                <Link href="/posts">
                  <a className="hover:underline">UI Design</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Front-End</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Back-End</a>
                </Link>
              </li>
              <li className="relative">
                <a
                  className="hover:underline cursor-pointer flex items-center"
                  href="#"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Lainnya
                  <svg
                    className="ml-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {dropdown && (
                  <ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-3b ">
                    {dropdownList.map(({ text, href }) => (
                      <li
                        key={text}
                        className="border-b bo rder-white/5 last:border-0"
                      >
                        <Link href={href}>
                          <a className="flex py-3 px-6 bg-gray-800  hover:bg-gray-700/50">
                            {text}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div
            className={`lg:w-3/12 absolute lg:static w-full left-0 px-10 lg:px-0 transition-all ${
              search ? "top-10" : "-top-40"
            }`}
          >
            <button
              className="absolute top-4 right-14 lg:hidden"
              onClick={() => setSearch(false)}
            >
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="16.2929"
                  y1="15.7071"
                  x2="1.29289"
                  y2="0.707106"
                  stroke="#68707C"
                  strokeWidth="2"
                />
                <line
                  y1="-1"
                  x2="21.2132"
                  y2="-1"
                  transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 1 15)"
                  stroke="#68707C"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <input
              className="bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-lg bg-search pl-10"
              placeholder="Cari Artikel"
            />
          </div>
        </div>
      </Container>
    </nav>
  );
}
