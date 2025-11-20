import { DashboardCards } from "./DashboardCards";
import { DashboardTable } from "./DashboardTable";

const DashboardContent = () => {
  return (
    <>
    
        <main class="dashboard-content container main">
          <div class="welcome">Welcome, John Wick</div>

          <DashboardCards />
          <section id="system-users">
            <h2 class="section-heading">System Users</h2>
            <DashboardTable />
          </section>
        </main>
      
    </>
  );
};

export { DashboardContent };
