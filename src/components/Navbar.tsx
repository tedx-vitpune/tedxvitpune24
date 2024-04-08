import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import cn from "classnames";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-center">
      <div
        className={cn(
          "fixed top-4 z-50 bg-black/80 w-11/12 lg:w-3/4 mx-auto py-4 px-5 lg:px-10 backdrop-blur-xl flex flex-col",
          isOpen && "rounded-3xl lg:rounded-full",
          !isOpen && "rounded-full",
        )}
      >
        <div className="flex justify-between">
          <Link href="/">
            <Image src={"logo.svg"} alt="Logo" width={208} height={100} />
          </Link>
          <div className="hidden lg:flex gap-6 justify-center items-center mr-2">
            <Link
              href="/about"
              className="font-black hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="/lookbook"
              className="font-black hover:underline underline-offset-4"
            >
              Lookbook
            </Link>
            <Link
              href="/cc"
              className="font-black hover:underline underline-offset-4"
            >
              Community Conversations
            </Link>
            <Link
              href="/past-editions"
              className="font-black hover:underline underline-offset-4"
            >
              Past Editions
            </Link>
          </div>
          <button
            className="lg:hidden flex justify-center items-center"
            onClick={setIsOpen.bind(null, !isOpen)}
          >
            {isOpen ? <CrossIcon /> : <MenuIcon />}
          </button>
        </div>
        {isOpen && (
          <div className="mt-6 mb-2 lg:hidden px-3 flex flex-col gap-3">
            <Link
              href="/about"
              className="font-black text-xl hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="/lookbook"
              className="font-black text-xl hover:underline underline-offset-4"
            >
              Lookbook
            </Link>
            <Link
              href="/cc"
              className="font-black text-xl hover:underline underline-offset-4"
            >
              Community Conversations
            </Link>
            <Link
              href="/past-editions"
              className="font-black text-xl hover:underline underline-offset-4"
            >
              Past Editions
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      className="h-8 w-8 text-white"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: any) {
  return (
    <svg
      className="h-8 w-8 text-white"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
