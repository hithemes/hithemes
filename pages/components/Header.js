import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const mainMenu = [
  {
    name: "Themes",
    href: "/",
  },
  {
    name: "Support",
    href: "#",
  },
  {
    name: "Custom Work",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <>
      <header className="px-4 py-8">
        <Popover className="relative bg-white">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center lg:justify-start lg:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <a>
                    <Image
                      src="/img/logo.svg"
                      alt="HiThemes Logo"
                      width={236}
                      height={58}
                    />
                  </a>
                </Link>
              </div>
              <div className="-mr-2 -my-2 lg:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden lg:flex space-x-8">
                {mainMenu.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a className="text-base font-medium text-[#03076C]">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
                <Link href="/">
                  <a className="whitespace-nowrap inline-flex items-center justify-center px-[20px] py-[13px] border border-transparent rounded-md shadow-[0px 4px 15px rgba(3, 7, 108, 0.2);] text-base font-medium text-white space-x-2 bg-[#0511F2] hover:bg-opacity-80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <span>Get Started</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 transition transform origin-top-right lg:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <Link href="/">
                      <a>
                        <Image
                          src="/img/logo.svg"
                          alt="HiThemes Logo"
                          width={236}
                          height={58}
                        />
                      </a>
                    </Link>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {mainMenu.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>
    </>
  );
}
