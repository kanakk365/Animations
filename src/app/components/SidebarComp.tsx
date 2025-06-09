import React from "react";
import { motion } from "framer-motion";

interface SidebarCompProps {
  isOpen: boolean;
  onToggle: () => void;
}

function SidebarComp({ isOpen, onToggle }: SidebarCompProps) {
  const sidebarVarients = {
    open: {
      width: "14rem",
    },
    closed: {
      width: "4.5rem",
    },
  };

  const childVarients = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };
  const parentVarient = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: -1,
      },
    },
  };

  const navigationItems = [
    {
      name: "Dashboard",
      href: "#",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
        />
      ),
    },
    {
      name: "Users",
      href: "#",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      ),
    },
    {
      name: "Analytics",
      href: "#",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 002 2v2a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 00-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9z"
        />
      ),
    },
    {
      name: "Settings",
      href: "#",
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </>
      ),
    },
  ];

  return (
    <>
      {/* Sidebar */}
      <motion.div
        variants={sidebarVarients}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-0 h-full bg-gray-900 text-white z-50 overflow-hidden"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700 h-16">
          {isOpen ? (
            <>
              <h2 className="text-xl font-semibold whitespace-nowrap">
                Navigation
              </h2>
              <button
                onClick={onToggle}
                className="p-2 rounded-md hover:bg-gray-700 transition-colors flex-shrink-0"
                title="Collapse Sidebar"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  />
                </svg>
              </button>
            </>
          ) : (
            <button
              onClick={onToggle}
              className="p-2 rounded-md hover:bg-gray-700 transition-colors w-full flex justify-center"
              title="Expand Sidebar"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>{" "}
        {/* Navigation Items */}
        <motion.nav variants={sidebarVarients} className="mt-4">
          <motion.ul variants={parentVarient} className="space-y-2 px-2">
            {navigationItems.map((item, index) => (
              <motion.li variants={childVarients} key={index}>
                <a
                  href={item.href}
                  className={`flex items-center rounded-lg hover:bg-gray-700 transition-colors ${
                    isOpen ? "p-3" : "p-3 justify-center"
                  }`}
                  title={!isOpen ? item.name : ""}
                >
                  <svg
                    className={`w-5 h-5 ${isOpen ? "mr-3" : ""} flex-shrink-0`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                  {isOpen && (
                    <span className="whitespace-nowrap">{item.name}</span>
                  )}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </motion.div>
    </>
  );
}

export default SidebarComp;
