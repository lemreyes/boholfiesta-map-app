import { Outlet} from "react-router-dom";
import ".././App.css"

const Layout = () => {
  return (
    <section className="nav">
      <nav className="nav">
        <ul  className="nav-ul">
          <li className="nav">
            <a href="https://my-philippines-travel-level.com/">Inspired by My Philippines Travel Level</a>
            <a href="">Source</a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </section>
  )
};

export default Layout;
