const Header =()=>{
    return(<>
    <header class="shadow-lg bg-primary/20">
        <nav class="nav">
          <a href="index.html" class="flex-between gap-2.5">
            <img
              src="assets/images/logo.png"
              alt="Charity Minds logo"
              class="w-20"
            />
            <h1 class="logo-h1">Charity Minds</h1>
          </a>
          <ul class="flex-between gap-5 text-lg text-secondary font-medium">
            <li>
              <a href="login.html">Login</a>
            </li>
            <li>
              <a href="register.html">Register</a>
            </li>
            <li>
              <a href="dashboard.html">Dashboard</a>
            </li>
          </ul>
        </nav>
      </header>
    </>)
    }
    
    export {Header}