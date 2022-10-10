import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { data } from "../portfolioData"

export default function Work() {
    const [projects, setProjects] = useState([...data.projects])


    const projectsHtml = projects.map(item => {
        return <Link to="/"><a key={item.id} href="portfolio-item.html" className="portfolio__item">
            <img src={item.img} alt="" className="portfolio__img" />
        </a></Link>
    })

    return (
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of cool projects</p>

            <div className="portfolio">
                {projectsHtml}

            </div>
        </section>
    )
}