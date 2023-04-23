import "./service.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBullseye, faPaintBrush, faWrench} from "@fortawesome/free-solid-svg-icons";

function Services() {

    const features = [
        {
            icon: <FontAwesomeIcon icon={faPaintBrush}/>,
            title: "DESIGNING SOFTWARE",
            desc: "design software by analyzing user requirements, creating software specifications, and designing the software architecture."
        },


        {
            icon: <FontAwesomeIcon icon={faWrench}/>,
            title: "DEVELOPING SOFTWARE",
            desc: "write clear code to develop the software. This includes programming, debugging, and testing"
        },

        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"/>
                </svg>,
            title: "TESTING SOFTWARE",
            desc: "test the software to ensure it is functional, reliable, and meets user requirements. This includes unit testing, integration testing, and system testing."
        },

        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
            </svg>,
            title: "MAINTAINING SOFTWARE",
            desc: "maintain software by fixing bugs, updating features, and adding new functionality. This includes updating software documentation and providing technical support to users."
        },
        {
            icon: <FontAwesomeIcon icon={faBullseye}/>,
            title: "SEO MARKETING",
            desc: "improving the quality and quantity of website traffic to a website or a web page from search engines."
        },
    ]


    return (
        <section className="relative py-28 bg-gray-900">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24">

                <div className="max-w-xl pb-10">
                    <h1 className="text-white text-3xl font-semibold sm:text-4xl">
                        WHAT I DO ?
                    </h1>
                    <span className="hidden h-1 sm:block sm:h-1px sm:w-20 sm:bg-indigo-500"></span>
                </div>

                <div className="mt-12 lg:mt-0">
                    <ul className="grid gap-8 sm:grid-cols-2">
                        {
                            features.map((item, idx) => (
                                <li key={idx}
                                    className="flex shadow-lg bg-indigo-600 hover:bg-indigo-800 cursor-pointer service__list p-2 gap-x-4">
                                    <div
                                        className="flex-none w-12 h-12 bg-gray-900 text-cyan-400 rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h1 className="text-gray-100 custom__title ">
                                            {item.title}
                                        </h1>
                                        <p className="mt-3 item__desc">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
                 style={{background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)"}}></div>
        </section>
    )
}

export default Services;
