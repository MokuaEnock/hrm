import ClientBar from "../navbar/navbar";
import "./home.css";

import { FaBell } from "react-icons/fa";

export default function ClientHome() {
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-home">
        <header id="client-home-header">
          <div>
            <h3>Good morning, Hr. Manager</h3>
            <p>Hope you have a wonderful day</p>
          </div>

          <span>
            <form>
              <button>Search</button>
              <input type="text" placeholder="Search for anything ..." />
            </form>

            <button>
              <FaBell />
            </button>
          </span>
        </header>
      </section>
    </section>
  );
}
