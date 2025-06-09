"use client";
import { IconRocket } from "@tabler/icons-react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useSpring,
} from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";

type Features = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const features: Features[] = [
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With out state of the are AI , you can generate ultra realistic images in no time at all .",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-1.jpg"
          alt="car"
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With out state of the are AI , you can generate ultra realistic images in no time at all .",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-1.jpg"
          alt="car"
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With out state of the are AI , you can generate ultra realistic images in no time at all .",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-1.jpg"
          alt="car"
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
];

function Content4() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 py-10 ">
        {features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
}

function FeatureItem({ feature }: { feature: Features }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(useTransform(scrollYProgress, [0, 1], [200, -200]), {
    stiffness:100,
    damping:20,
    mass:1
  });
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);

  return (
    <div ref={ref} className="grid grid-cols-2 items-center gap-20 py-40">
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale:scale
        }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-white text-4xl font-bold ">{feature.title}</h2>
        <p className="text-neutral-400 text-lg ">{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
}

export default Content4;
