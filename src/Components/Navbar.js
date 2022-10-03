import NavbarIcon from "../images/taskicon.png";

const Navbar = () => {
  return (
    <>
      <nav
        style={{ backgroundColor: "orange" }}
        class="navbar navbar-default fixed-top"
      >
        <div class="container">
          <a className="navbar-brand" href="/">
            <img
              src={NavbarIcon}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Taskify
          </a>
          <form class="d-flex">
            <button
              style={{ backgroundColor: "black", color: "white" }}
              class="btn"
              type="button"
            >
              Login/Signup
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
