import React, { useState } from "react";
import { data } from "../portfolioData"
import { Link } from "react-router-dom"

export default function Work() {
    const [projects] = useState([...data.projects])
    console.log(process.env.PUBLIC_URL)
    const projectsHtml = projects.map(item => {
        return <Link key={item.id} to={`${item.id}`} className="portfolio__item">
            <img src={item.coverImg} alt="Project Cover" className="portfolio__img" />
        </Link>
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