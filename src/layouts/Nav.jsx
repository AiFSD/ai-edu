import { navLinks } from "../datas/LinkData";

const Nav = () => {
  return (
    <div className="container ">
      <div className="btn-group"  style={{display:"flex",gap:"10px" , justifyContent:"center",fontFamily:"sans-serif" }}>
        {navLinks.map((item) => (
          <div key={item.id}>
            <button
              type="button"
              className="btn btn-subtle dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {item.title }
            </button>

            <ul className="dropdown-menu">
              {item.dropdownItems.map((data) => (
                <li>
                  <a className="dropdown-item" href="#">
                    {data}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
