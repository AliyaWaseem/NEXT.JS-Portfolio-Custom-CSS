
const Services = () => {
  return (
    <section>
      <div className="service-section">
        <div className="container">
            <div className="main">
            <div className="service-heading">
            <h2 className="service-title">Services</h2>
            <p className="lead-text-s">We offer a variety of services to help you with your project.</p>
            </div>
            <div className="card-container">
            <div className="card">
                <p className="service-icons">
                <i className="bi bi-code-slash"></i>
                </p>
                <h3 className="box-heading">Web Development</h3>
                <p className="lead-text">We develop responsive websites using HTML, CSS, and JavaScript.</p>
            </div>
            
            <div className="card">
                <p className="service-icons">
                <i className="bi bi-stack"></i>
                </p>
                <h3 className="box-heading">Full Stack Development</h3>
                <p className="lead-text">We develop web applications using HTML, CSS, JavaScript, and backend technologies like Next.js and React.</p>
            </div>
            <div className="card">
                <p className="service-icons">
                <i className="bi bi-pencil-square"></i>
                </p>
                <h3 className="box-heading">UI/UX Design</h3>
                <p className="lead-text">We create user-friendly interfaces using design tools like Figma.</p>
            </div>
            </div>
            
          </div>
          
        </div>
            </div>
          
    </section>
  );
};

export default Services;
