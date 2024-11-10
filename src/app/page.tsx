import Image from "next/image";
import styles from "./page.module.css";
import Services from "./components/services";
import Projects from "./components/projects";

export default function Home() {
  return (
    <section>
      <div className="hero-section">
        <div className="container">
          <div className="main">
          <div className="text-container">
            <h1 className="hero-text">Hi, I am Aliya, Passionate Web Developer</h1>
            <p className="hero-para">
              A passionate web developer with a strong foundation in front-end
              and back-end technologies, dedicated to creating responsive,
              user-friendly websites and applications. Skilled in HTML, CSS,
              JavaScript, and frameworks like React and Next.js, with a focus on
              clean code, scalability, and modern design principles. Eager to
              bring creative ideas to life and continuously learn and adapt to
              the latest industry trends and tools.
            </p>
            <button className="resume-button">Download Resume</button>
          </div>
          <div>
            <Image
              src="/profile-pic.png"
              alt="Hero Image"
              className="hero-image"
              width={300}
              height={300}
            />
          </div>
          </div>
        </div>
      </div>
      <Services />
      <Projects />
    </section>
  );
}
