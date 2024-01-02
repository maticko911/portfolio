import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1
        className="head-text
      ">
        Hello, I'am{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Matic
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I'm currently a third-year student at the Faculty of Computer Science
          in Maribor, Slovenia. My passion lies in crafting innovative web
          pages, and I thoroughly enjoy the process of building and designing
          online experiences. As I continue my journey in the realm of
          information technology, I look forward to further honing my skills and
          exploring new possibilities in the ever-evolving digital landscape.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 ">
        <h3 className="subhead-text"></h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Feel free to explore my portfolio and witness the projects that
            reflect my dedication to the world of web development. If you have
            any inquiries or just want to connect, don't hesitate to reach out.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experiance) => (
              <VerticalTimelineElement
                key={experiance.company_name}
                date={experiance.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experiance.icon}
                      alt={experiance.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experiance.iconBg,
                  boxShadow: "none",
                }}
                iconStyle={{ background: experiance.iconBg }}>
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experiance.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium fot-base"
                    style={{ margin: 0 }}>
                    {experiance.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experiance.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-black-500/75 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
