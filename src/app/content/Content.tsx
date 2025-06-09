import React from "react";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import Card from "../components/Card";

function Content() {
  return (
    <div
      className={cn(
        GeistSans.className,
        "h-screen flex items-center justify-center bg-gray-50"
      )}
    >
     <Card/>
    </div>
  );
}

export default Content;
