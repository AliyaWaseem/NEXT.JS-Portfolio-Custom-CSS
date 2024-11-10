import Image from "next/image";

const Projects = () => {
  return (
    <section>
      <div className="featured-section">
        <div className="container">
          <div className="main">
            <div className="project-heading">
              <h2 className="project-title">Featured Projects</h2>
              <p className="lead-text">
                Explore a collection of diverse web development projects,
                showcasing expertise in creating responsive, interactive, and
                visually appealing applications across various technologies.
              </p>
            </div>
            <div className="card-parent">
            <div className="project-box">
              <Image
                src="/bmp.jpeg"
                alt="image"
                width={250}
                height={200}
                layout="intrinsic"
                quality={100}
              />
              <div className="card-content">
                <h2 className="card-head">Design Responsive Website</h2>
                <div className="badge-container">
                  <div className="badge">
                    <p>2024</p>
                  </div>
                  <p className="dashboard">Dashboard</p>
                </div>
                <p className="lead-text-p">
                  A fully responsive website built with Bootstrap, ensuring
                  seamless adaptability across all devices and screen sizes for
                  a smooth user experience.
                </p>
              </div>
            </div>

            <div className="project-box">
              <Image
                src="/project4-1.webp"
                alt="image"
                width={250}
                height={200}
                layout="intrinsic"
                quality={100}
              />
              <div className="card-content">
                <h2 className="card-head">Editable Resume Builder</h2>
                <div className="badge-container">
                  <div className="badge">
                    <p>2024</p>
                  </div>
                  <p className="dashboard">Dashboard</p>
                </div>
                <p className="lead-text-p">
                  An interactive, editable resume builder that enables users to
                  create, customize, and format professional resumes
                  effortlessly.
                </p>
              </div>
            </div>

            <div className="project-box">
              <Image
                src="/netflix.jpeg"
                alt="image"
                width={250}
                height={200}
                layout="intrinsic"
                quality={100}
              />
              <div className="card-content">
                <h2 className="card-head">Clone Netflix Website</h2>
                <div className="badge-container">
                  <div className="badge">
                    <p>2024</p>
                  </div>
                  <p className="dashboard">Dashboard</p>
                </div>
                <p className="lead-text-p">
                  A fully responsive website built with Bootstrap, ensuring
                  seamless adaptability across all devices and screen sizes for
                  a smooth user experience.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
