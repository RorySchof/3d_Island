// import React from 'react'
// import { skills }from '../constants'

// const About = () => {
//   return (
//     <section className='max-container '>
//       <h1 className='head-text'>
//         hello i'm <span className=' blue-gradient_text font-semibold 
//         drop-shadow'> Rory
// </span>
//       </h1>

//       <div className=' mt-5 flex flex-col gap-3 text-slate-500'>
//         <p>Full stack web developr and software engineer based out of Toronto, Canada. 
//         </p>
//       <div className=' py-10 flex flex-col'>
//         <h3 className=' subhead-text'>
//           My Skills
//         </h3>

//         <div className=' mt-16 flex flex-wrap gap-12'>
//           {skills.map((skill))} => (

//         </div>


//       </div>

//       </div>
//     </section>
//   )
// }

// export default About

// FROM GH

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA, Footer  } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
     <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Rory
        </span>{" "}
        
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Full-stack web developer with a broad range of professional experience across a multitude of industries. 
        Able to create robust full-cycle websites and web applications through a strong process of research, 
        planning, design, development, and testing.        
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            
Utilizing a diverse range of professional expertise to enhance the success of your project. 
            <br />
            Proficient in working autonomously or collaboratively within a team, ensuring timely delivery and top-tier outcomes. 
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
      <Footer />
    </section>
  );
};

export default About;