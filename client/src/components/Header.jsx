import { Link } from "react-router";
import logoImage from "../assets/logo.png";
const Header =()=>{
    return(<>
    <header class="shadow-lg bg-primary/20">
        <nav class="nav">
          <Link to="/" class="flex-between gap-2.5">
            <img
              src={logoImage}
              alt="Charity Minds logo"
              class="w-20"
            />
            <h1 class="logo-h1">Charity Minds</h1>
          </Link>
          <ul class="flex-between gap-5 text-lg text-secondary font-medium">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>)
    }
    
    export {Header}