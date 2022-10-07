import React from "react";

export default function Work() {
    return (
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">
                
                <a href="portfolio-item.html" className="portfolio__item">
                    {/* <img src="img/portfolio-01.jpg" alt="" className="portfolio__img"> */}
                    <h3>Photo</h3>
                </a>
                
                
                <a href="portfolio-item.html" className="portfolio__item">
                    {/* <img src="img/portfolio-02.jpg" alt="" className="portfolio__img"> */}
                    <h3>Photo</h3>
                </a>
                
                <a href="portfolio-item.html" className="portfolio__item">
                    {/* <img src="img/portfolio-03.jpg" alt="" className="portfolio__img"> */}
                    <h3>Photo</h3>
                </a>
                
            </div>
        </section>
    )
}