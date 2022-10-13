import React from "react";
import profilePic from "../img/profile-pic.png"

export default function HomePage() {
    return (
        <section className="intro">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Victor Fernando</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Frontend Dev</p>
            <img src={profilePic} alt="Victor Fernando smiling" className="intro__img"/>
            <a href="https://drive.google.com/file/d/1G8CRDXgYefPi5ofwYpA4sEeR6DBqBiU0/view" target="_blank" className="section__subtitle section__link--intro">📄 Download CV</a>
        </section>
    )
}