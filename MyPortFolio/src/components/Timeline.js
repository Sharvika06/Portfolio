import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { black } from "tailwindcss/colors";
import ipser from '../assets/Images/ipser.png';
import cfs from '../assets/Images/cfs.png';
import techm from '../assets/Images/techm.png';

function Timeline() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const timelineItems = [
        {
            date: "July 2024 - present",
            title: "Development Intern",
            company: "Ipser Labs",
            description: "Working as a freelance developer"
        },
        {
            date: "August 2023 - January 2024",
            title: "Technical Development Intern",
            company: "Commonwealth Fusion Systems",
            description: "Worked on Java, Python and AWS"
        },
        {
            date: "January 2018 - Dec 2021",
            title: "Software Developer",
            company: "Tech Mahindra",
            description: "Worked on React.js, Node.js,C++ ,unit and integration testing and CI/CD pipeline."
        },
    ];

    let icons = [
        <img src={ipser} alt="Ipser Labs"/>,
        <img src={cfs} alt="Commonwealth Fusion Systems"/>,
        <img src={techm} alt="Tech Mahindra" style={{ width: '70px', height: '20px' }}/>,
    ];

    const colors = ['#8AACB8', '#B3CCD1']; // Two shades of #8AACB8

    return (
        <>
            <h1 id="timeline" className="mt-8 text-4xl font-medium title-font mb-2 text-black text-center">Experience</h1>
            <div className="mx-auto">
                <VerticalTimeline>
                    {timelineItems.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            date={<div className="mx-4">{item.date}</div>}
                            contentStyle={{
                                background: colors[index % 2], // Alternate between two shades
                                color: black
                            }}
                            iconStyle={{
                                background: "transparent",
                                color: "#3498db",
                                border: '2px solid #3498db',
                                padding: "16px",
                                marginRight: "4px"
                            }}
                            icon={icons[index]}
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-once="true"
                            className="aos-item"
                            data-aos-anchor-placement="center-bottom"
                        >
                            <h3 className="vertical-timeline-element-title">
                                <strong>{item.title}</strong>
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                <strong>{item.company}</strong>
                            </h4>
                            <p>{item.description}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
}

export default Timeline;
