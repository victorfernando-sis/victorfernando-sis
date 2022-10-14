import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { data } from "../portfolioData"

export default function PortfolioItem() {

    const { projectId } = useParams()
    const [project, setProject] = useState({})

    useEffect(() => {
        setProject(data.projects.find(item => item.id === parseInt(projectId)))
    }, [projectId])
    console.log(project)
    return (
        <div>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    {project.name}
                </h1>
                <p className="section__subtitle section__subtitle--intro">{project.subtitle}</p>
                <img src={project.coverImg} alt="Cover" className="intro__img" />
            </section>

            <div className="portfolio-item-individual">
                <h3>Description:</h3>
                <p>{project.description}</p>
                <p><a className="project_links--individual" href={project.appUrl} rel="noreferrer" target="_blank">Open the app</a>
                <a className="project_links--individual"href={project.codeUrl} rel="noreferrer" target="_blank"> See the Code</a></p>
                <h3>Images:</h3>
                <img src={project.img1} alt="Screenshot" />

            </div>
        </div>
    )
}