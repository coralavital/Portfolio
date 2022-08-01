import React from 'react' ;
import '../CSS/Projects.css' ;
import Project1 from '../img/Project1.jpg' ;
import Project2 from '../img/Project2.jpg' ;
import Project3 from '../img/Project3.jpg' ;
import Project4 from '../img/Project4.png' ;
import Project5 from '../img/Project5.jpg' ;
import Project6 from '../img/Project6.jpg' ;


function Project() {
    return (
        <div className="project component__space" id="Project">
            <div className="heading">
                <h1 className="heading">My latest projects</h1>
                <p className="heading p__color">See full projects cases on GitHub </p>
                <p className="heading p__color">Any interests on collaborathing ?</p>
                <p className="heading p__color">Just drop me a line !</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project1} className="project__img" alt="project1"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Pet's-Nanny</h5>
                                <h4 className="project__text">EJS & NODEJS - Petsiting Website</h4>
                                <a href="https://github.com/coralavital/pets_nanny" className="project__btn">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project2} className="project__img" alt="project2"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">COVID-19</h5>
                                <h4 className="project__text">JAVA - Simulation of the corona virus</h4>
                                <a href="https://github.com/coralavital/COVID19" className="project__btn">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} className="project__img" alt="project3"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">House-Price-Prediction</h5>
                                <h4 className="project__text">PYTHON - Predict house prices</h4>
                                <a href="https://github.com/coralavital/House-Price-Prediction" className="project__btn">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project4} className="project__img" alt="project4"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Tic-Tac-Toe</h5>
                                <h4 className="project__text">React - Game</h4>
                                <a href="https://github.com/coralavital/Tic-Tac-Toe" className="project__btn">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project5} className="project__img" alt="project5"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Pack4u</h5>
                                <h4 className="project__text">CPP - Order management system</h4>
                                <a href="https://github.com/coralavital/Pack4u" className="project__btn">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project6} className="project__img" alt="project1"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Todo list</h5>
                                <h4 className="project__text">React</h4>
                                <a href="https://github.com/coralavital/Todo-app" className="project__btn">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="view__more__btn d__flex align__item__center justify__content__center pxy__30">
					<button onClick={()=> window.open("https://github.com/coralavital?tab=repositories", "_blank")} className="view__more btn__hover pinter btn">View more</button>
				</div>
            </div>
        </div>
    )
}

export default Project