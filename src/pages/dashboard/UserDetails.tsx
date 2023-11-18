import Link from "next/link";

export default function UserDetails() {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 bg-gray-300 shadow-md max-h-screen w-60 hidden md:block">
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow">
            <div className="px-4 py-7 text-center border-b">
              <h1 className="text-xl font-bold leading-none">
                <Link href={"/"} className="text-yellow-700 cursor-pointer">
                  Reach Hub{" "}
                </Link>
              </h1>
            </div>
            <div className="p-4 bg-white">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/players"
                    className="flex items-center  rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      className="text-lg mr-4"
                    >
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                    Players
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
