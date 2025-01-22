function Footer() {
    return (
      <footer className="footer p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>About Me</h5>
              <p>
                My name is Victor Hong. I have worked in the car business for 10+ years, from salesperson to finance manager.
                I am completing my Computer Science degree in May 2025. I am fluent in English and Chinese.
              </p>
            </div>
            <div className="col-md-3">
              <h5>Contact Me</h5>
              <p>
                Email: XXXXXXXX@gmail.com <br />
                Phone: XXX-XXX-XXXX
              </p>
            </div>
            <div className="col-md-3">
              <h5>Follow Me</h5>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <p>&copy; My Website, all rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  