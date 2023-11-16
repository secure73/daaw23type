import React from 'react'

const Navbar = () => {
  return (
    <div className="container-fluid bg-white sticky-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
                <a href="index.html" className="navbar-brand">
                    {/* <img className="img-fluid" src="resources/img/logo.png" alt="Logo"/> */}
                </a>
                <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <a href="index.php" className="nav-item nav-link">Home</a>
                        <a href="dashboard.php" className="nav-item nav-link">dashboard</a>                       
                            <a href="login.php" className="nav-item nav-link">login</a>

                        <a href="logout.php" className="nav-item nav-link">logout</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar