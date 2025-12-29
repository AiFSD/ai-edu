import '../styles/mainlayout.css'
import { CiGlobe } from "react-icons/ci";



const MainLayout = () => {
  return (
    <div className="main p-3">
      <nav className="navbar navv p-1">
        <div className="container-fluid">
          <a className="navbar-brand ">
            <div className="col  enter-btn">
              <button type="button" className="btn btn-dark">
                Log In
              </button>
              <button type="button" className="btn btn-dark">
                SIGN UP
              </button>
            </div>
          </a>
          <h1 className="head">Worlds No.1 Free Lance PlatForm</h1>

          <div className="btn-group language">
            <button
              type="button"
              className="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <CiGlobe className="world" /> Language
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something{" "}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainLayout