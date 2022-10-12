import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { data } from "../portfolioData"

export default function PortfolioItem() {

    const { projectId } = useParams()
    const [project, setProject] = useState({})
    
    useEffect(() => {
        setProject(data.projects.find(item => item.id === parseInt(projectId)))
    }, [])
    console.log(project)
    return (
        <div>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    {project.name} <strong>{project.name}</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">{project.subtitle}</p>
                <img src={project.coverImg} alt="Cover Image" className="intro__img" />
            </section>

            <div className="portfolio-item-individual">
            <h3>Description:</h3><br/>
                <p>{project.description}</p>

                <h3>Images:</h3><br/>
                <img src={project.img1} alt="Screenshot"/>
                <h4><a href="https://victorfernando-sis.github.io/quizzical/" target="_blank">Click to open the app</a></h4>
                <h4><a href="https://github.com/victorfernando-sis/quizzical" target="_blank">Click to see the code on GitHub</a></h4>
            </div>
        </div>
    )
}