import { Link } from "react-router-dom";
const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="from-red-50 to-gray-50 bg-gradient-to-b min-h-screen px-2">
      <div className="mx-auto max-w-[1440px]">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

const Header = () => {
  return (
    <div className="w-full flex h-20 relative justify-between items-center">
      <Link to="/" className="max-w-[80px] relative z-10 hover:animate-shake">
        <img src="/logo.png" alt="" />
      </Link>
      <Nav />
    </div>
  );
};

const Nav = () => {
  const LINKS = [
    {
      name: "Beans",
      path: "/beans",
    },
    {
      name: "Facts",
      path: "/facts",
    },
    {
      name: "Recipes",
      path: "/recipes",
    },
    {
      name: "Combinations",
      path: "/combinations",
    },
    {
      name: "History",
      path: "/history",
    },
  ];
  return (
    <div className="w-full  absolute mx-auto right-0 left-0 text-center">
      <ul className="menu">
        {LINKS.map((link) => (
          <li key={link.path}>
            <Link className="menu_link" to={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="w-full text-red-400 grid grid-cols-4 gap-16 mt-12 pb-20">
      <div className="w-full h-full">
        <img className="max-w-[80px]" src="/logo.png" alt="" />
        <p className="mt-2">
          All data in this application and its API are sourced from the official
          Jelly Belly website. None of the content here is claimed as original;
          it's all credited to and derived from Jelly Belly's official
          resources.
        </p>
      </div>

      <div className="w-full h-full text-red-400">
        <h2 className="text-red-500 font-bold">Data Accuracy</h2>
        <p className="mt-2">
          Despite efforts to ensure accuracy, this resource may contain errors
          or inaccuracies and should not be the sole basis for critical
          decisions, especially those related to health.
        </p>
      </div>
      <div className="w-full h-full">
        <ul>
          <li>
            <h2 className="text-red-500 font-bold">Site map</h2>
          </li>
          <li className="mt-2">
            <Link className="menu_link" style={{ fontSize: "1rem" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="menu_link"
              style={{ fontSize: "1rem" }}
              to="/beans"
            >
              Beans
            </Link>
          </li>
          <li>
            <Link
              className="menu_link"
              style={{ fontSize: "1rem" }}
              to="/facts"
            >
              Facts
            </Link>
          </li>
          <li>
            <Link
              className="menu_link"
              style={{ fontSize: "1rem" }}
              to="/recipes"
            >
              Recipes
            </Link>
          </li>
          <li>
            <Link
              className="menu_link"
              style={{ fontSize: "1rem" }}
              to="/combinations"
            >
              Combinations
            </Link>
          </li>
          <li>
            <Link
              className="menu_link"
              style={{ fontSize: "1rem" }}
              to="/history"
            >
              History
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-full text-red-500">
        <h2>Made with ❤️</h2>
      </div>
    </div>
  );
};
