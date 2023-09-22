
function Navbar(){
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-0 py-3">
  <div className="container-xl">
    <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav mx-lg-auto">
        <a className="nav-item nav-link active" href="#about-me" aria-current="page">About Me</a>
        <a className="nav-item nav-link active" href="#skills">Skills</a>
        <a className="nav-item nav-link active" href="#projects">Projects</a>
        <a className="nav-item nav-link active" href="#certificates">Certifications</a>
        <a className="nav-item nav-link active" href="#contact">Contact</a>

      </div>

    </div>
  </div>
</nav>
    )
}

export default Navbar;