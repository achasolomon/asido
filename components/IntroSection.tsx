"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export default function IntroSection() {
  const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="py-[200px] px-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 
            className="font-bold text-center text-"
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontSize: '30px',
              fontWeight: 700,
              lineHeight: '130%',
              color: '#202124'
            }}
          >
            Since inception in 2019, Asido Foundation has led bold advocacy for
            mental health reforms. These range from public awareness campaigns to
            the passing of the 2021 Mental Health Act.
          </h1>
        </motion.div>
      </div>
    </section>
  );
}