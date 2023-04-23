import "./about.css"

function About() {
    return (
        <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 md:px-8  items-center lg:flex">
            <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                <h6 className="text-white banner__start ">Hello, I am</h6>
                <h1 className="text-white banner__middle font-bold text-4xl xl:text-5xl">
                    <span className="text-indigo-400 name"> Youssef EL MOUDENE</span>
                </h1>
                <p className="text-gray-200 font-bold">i Am Software Engineer</p>

                <p className="text-gray-300 text__desc max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                    Young man full of passion and courage, passionate about programming and courageous in facing new challenges, these two personal qualities have driven me to learn, improve, and adapt to different work environments
                </p>
                <div
                    className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                    <a href=""
                       className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                        CONTACT ME
                    </a>
                    <a href=""
                       className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto">
                        Download CV
                    </a>
                </div>
            </div>
            <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                <img src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" className="animate__bounce w-full mx-auto sm:w-10/12  lg:w-full" />
            </div>
        </section>
    );
}

export default About;
