function Experiences() {
    return (
        <section className="text-gray-600  mx-auto max-w-screen-xl body-font ">
            <div className="container px-5 py-24 mx-auto">
                <div className="max-w-xl pb-10">
                    <h1 className="text-white text-3xl pb-2 font-semibold sm:text-4xl">
                        Here's Where I've Worked At
                    </h1>
                    <span className="hidden h-1 sm:block sm:h-1px sm:w-20 sm:bg-indigo-500"></span>
                </div>

                <div className="-my-8 divide-y-2 divide-gray-100">

                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-white">stage Développeur Web (PFE)</span>
                            <span className="mt-1 text-gray-600 text-sm">de avr. 2021 à juin 2021</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-gray-400 title-font mb-2">Agence du bassin
                                hydraulique de Tensift</h2>

                            <ul className="list__expert">
                                <li>Développement d'une application Web pour l'établissement digital de la situation
                                    hydrologique journalière
                                    au sein de l'agence du bassin hydraulique de Tensift.
                                </li>
                                <li>
                                    Modélisation : UML.
                                </li>
                                <li> Plateforme de programmation : Angular, Spring Boot</li>
                                <li>Langages de programmation : JAVA, TypeScript, HTML5, CSS, Js</li>
                            </ul>
                        </div>
                    </div>


                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span
                                className="font-semibold title-font text-white">Responsable Technique et développement</span>
                            <span className="mt-1 text-gray-600 text-sm">de Juin. 2021 à ce jour</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-gray-400 title-font mb-2">
                                <a href="https://engflexy.com/" target="_blank">EngFlexy</a>
                            </h2>

                            <ul className="list__expert">
                                <li>Développement du frontend/backend et tests unitaires conformément aux bonnes
                                    pratiques
                                </li>
                                <li>Orchestration du déploiement d’applications via des outils de déploiement
                                    continue.
                                </li>
                                <li>Rédiger les spécifications techniques nécessaires.</li>
                                <li>Analyse et correction des anomalies dans les différents cycles de vie de
                                    l’application
                                </li>
                                <li>Plateforme de programmation : Angular, Spring Boot</li>
                            </ul>
                            <a href="https://engflexy.com/" target="_blank"
                               className="text-indigo-500 inline-flex items-center mt-4">Consulter engflexy
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                     fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span
                                className="font-semibold title-font text-white">Développeur Full Stack Spring/ Angular</span>
                            <span className="mt-1 text-gray-600 text-sm">avr. 2022 - oct. 2022 · 7 mois</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-gray-400 title-font mb-2">
                                <a href="https://engflexy.com/" target="_blank">360 Business Ventures, Mohammedia
                                    .Freelance</a>
                            </h2>

                            <ul className="list__expert">
                                <li>Développement backend et frontend de sites et applications web.</li>
                                <li>Maintenance, correctif de bugs et amélioration des sites ou applications web.</li>
                                <li>Développer des tests unitaires et contribuer à la généralisation des tests
                                    fonctionnels en contexte d’intégration
                                    continue (Git, docker, GitLab CI)
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Experiences;
