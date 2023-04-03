import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./profile.css";

export default function EmployerProfile() {
  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-profile-cont">
        <EmployerHead message={"Update your organisations details"} />
        
      </section>
    </section>
  );
}
