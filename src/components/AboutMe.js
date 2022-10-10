import React from "react";
import profilePic from "../img/victor-portrait.png"

export default function AboutMe() {
    console.log(profilePic)
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Designer & React developer</p>

            <div className="about-me__body">
                <p>I am a frontend developer with a strong passion for making things simple and automating daily tasks. I try to keep up with security and best practices.</p>
                <p>I enjoy architecting, designing, and developing web applications that solve problems around me. I have experience working on automation tools because I really get involved in understanding business workflows. And I am always looking for new things to learn.</p>

                <p>I code because I am fascinated by how even simple apps can make people's lives so productive and practical. It simply makes sense to me.</p>

                <p>In my free time I'm a non-fiction reader. A musician by nature. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>

            <img src={profilePic} alt="Jane leaning against a bus" className="about-me__img" />
        </section>
    )
}