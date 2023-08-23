import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <section id="education">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full lg:p-20 p-4"
      >
        {/* part one */}
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Educational Qualification
            </h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="BTech in Computer"
              subTitle="Dr. Babasaheb Ambedkar Technological University, Lonere (2019 - 2023)"
              result="7.89 CGPA"
              des="Studied IT related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, Compiler Design etc."
            />
            <ResumeCard
              title="Higher Secondary Education (HSC)"
              subTitle="Jawahar Navodaya Vidyalaya, Raigad (2017 - 2019)"
              result="89.80%"
              des="Ranked 2nd in the School. Studied in this school from 11th to 12th std. HSC Subjects: PCMB, English. "
            />
            <ResumeCard
              title="Secondary School Education (SSC)"
              subTitle="Jawahar Navodaya Vidyalaya, Raigad (2015 - 2017)"
              result="86.40% "
              des="Studied in this school from 9th to 10th std. SSC Subjects: English, Hindi, Marathi, Maths, Science, Social Sciences."
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
