import { about } from "../assets"
import 'animate.css';


const About = () => {
    return (
        <section className="max-w-screen-xl  flex flex-col  about" id="about">
            <div className="about-title cursor-pointer ">
                <h1 >About Me</h1>
            </div>

            <div className="about-section flex flex-row justify-between cursor-pointer">
                <img src={about} alt="about image" />

                <div className="flex flex-col justify-center">
                    <div className="font-outfit text-[18px] text-dimWhite mt-4 space-y-2 font-normal">
                        <p>I am a dedicated web programmer with good experience creating responsive, user-friendly websites and web applications.
                            Skilled in <i>front-end and web designing,</i></p>
                        <p>I specialize in delivering efficient, scalable, and visually appealing solutions tailored to client needs.
                            Passionate about coding and problem-solving, I'm always eager to bring ideas to life through innovative web technologies.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill flex font-semibold min-w-[150px] text-[19px]"><p>HTML & CSS </p> <hr style={{ width: "60%" }} /></div>
                        <div className="about-skill flex font-semibold min-w-[150px] text-[19px]"><p>Javascript</p> <hr style={{ width: "70%" }} /></div>
                        <div className="about-skill flex font-semibold min-w-[150px] text-[19px]"><p>React Js </p> <hr style={{ width: "60%" }} /></div>
                        <div className="about-skill flex font-semibold min-w-[150px] text-[19px] "><p>Next js</p> <hr style={{ width: "70%" }} /></div>
                        <div className="about-skill flex font-semibold min-w-[150px] text-[19px]"><p>Figma</p> <hr style={{ width: "60%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements flex flex-row mb-10 w-full justify-around text-center">
                <div className="about-achievement  ">
                    <h1>2+</h1>
                    <p>Years of experience</p>
                </div>
                <hr />

                <div className="about-achievement">
                    <h1>40+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />

                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
        </section>
    )
}

export default About