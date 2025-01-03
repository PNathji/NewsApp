import styled from "styled-components";

const StyledNavLink = styled.div`
  cursor: pointer; 
  &:hover {
    cursor: grab; 
    color:rgb(255, 217, 0); 
  }
`;

const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark fs-4">NewsApp</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={() => setCategory("Technology")}>
                <StyledNavLink className="nav-link">Technology</StyledNavLink>
              </li>
              <li className="nav-item" onClick={() => setCategory("Health")}>
                <StyledNavLink className="nav-link">Health</StyledNavLink>
              </li>
              <li className="nav-item" onClick={() => setCategory("Science")}>
                <StyledNavLink className="nav-link">Science</StyledNavLink>
              </li>
              <li className="nav-item" onClick={() => setCategory("Sports")}>
                <StyledNavLink className="nav-link">Sports</StyledNavLink>
              </li>
              <li
                className="nav-item"
                onClick={() => setCategory("Entertainment")}
              >
                <StyledNavLink className="nav-link">Entertainment</StyledNavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
