import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./apps.css";

export default function EmployerApps() {
  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-apps">
        <EmployerHead message={"Where would you like to navigate to?"} />
        <div id="employer-apps-cont"></div>
      </section>
    </section>
  );
}
