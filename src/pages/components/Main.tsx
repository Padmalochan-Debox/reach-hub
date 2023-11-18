import Image from "next/image";
import Link from "next/link";
import componentsImg from "@/assets/components.svg";
import { DownArrow, RightArrow } from "@/icons";

export default function Main() {
  return (
    <main className="grow">
      <article className="grid lg:grid-cols-2">
        <div className="px-8 py-20 md:px-20 lg:py-48">
          <h1 className="text-5xl font-semibold text-transparent md:text-6xl gradient">
            Reach Hub.
          </h1>
          <p className="mt-2 text-lg">
            Plase login to see Chess players and their history.
          </p>
          <div className="flex gap-2 mt-8">
            <Link
              href="/dashboard"
              className="flex content-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700"
            >
              Login to start
              <div className="m-auto">
                <RightArrow />
              </div>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
