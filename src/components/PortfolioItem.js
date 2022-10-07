import React from "react";

export default function Work() {
    return (
        <div>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    The title <strong>of my project</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">A short subtitle</p>
                {/* <img src="img/portfolio-01.jpg" alt="" className="intro__img"> */}
            </section>

            <div className="portfolio-item-individual">
                <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
                {/* <img src="img/portfolio-details.jpg" alt=""> */}
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur incidunt?</p>
                    <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
            </div>
        </div>
    )
}