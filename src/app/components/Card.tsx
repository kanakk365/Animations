"use client";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Icon24Hours,
  Icon360,
  Icon360View,
  IconMessage,
  IconPlus,
} from "@tabler/icons-react";
import { X } from "lucide-react";
import { useState } from "react";

function Card() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
          initial={{
            opacity:0,
            scale:0.98,
            filter:"blur(10px)"
          }}
          animate={{
            opacity:1,
            filter:"blur(0px)"
          }}
            exit={{
                opacity:0,
                scale:0.98,
                filter:"blur(10px)",
            }}
            transition={{
                duration:0.3,
                ease:"easeInOut"
            }}
            className={cn(
              "w-72 min-h-[26rem] h-[27rem] rounded-xl bg-white ",
              " shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
              "p-4 flex flex-col"
            )}
          >
            {" "}
            <h1 className="text-[10px] font-semibold">
              Organization UI Components
            </h1>
            <p className="text-[10px] text-neutral-600 mt-2  ">
              Clerk&apos;s UI components add turn-key simplicity to complex
              Organization management tasks.
            </p>
            <div className="flex items-center w-full mx-auto gap-4 ">
              <button
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-center text-[10px] mx-auto gap-1 mt-4 cursor-pointer ",
                  " shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
                  "px-2 py-1 rounded-md"
                )}
              >
                Clerk
                <X size={10} className="text-neutral-400 " />
              </button>
            </div>
            <div className=" relative flex-1 bg-neutral-100 border border-neutral-200 border-dashed rounded-lg mt-4   ">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 h-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200  "
              >
                {" "}
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center ">
                    <IconMessage className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600 ">
                      Aceternity UI Components
                    </p>
                    <p className="text-[8px] mt-1 text-neutral-400 ">
                      A Collection of UI components{" "}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center ">
                    <Icon24Hours className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600 ">
                      Aceternity UI Components
                    </p>
                    <p className="text-[8px] mt-1 text-neutral-400 ">
                      A Collection of UI components{" "}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center ">
                    <Icon360 className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600 ">
                      Aceternity UI Components
                    </p>
                    <p className="text-[8px] mt-1 text-neutral-400 ">
                      A Collection of UI components{" "}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center ">
                    <Icon360View className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600 ">
                      Aceternity UI Components
                    </p>
                    <p className="text-[8px] mt-1 text-neutral-400 ">
                      A Collection of UI components{" "}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4 items-center justify-center  ">
                  <div className="h-4 w-4 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center ">
                    <IconPlus className="h-3 w-3 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] text-neutral-400 mt-1 ">
                      Create Project
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Card;
