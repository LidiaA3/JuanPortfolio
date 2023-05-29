import Topbar from "../components/topbar/Topbar";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <section className="hero-section">
          <span className="h1">Juan Tamarit</span>
        </section>
      </main>
    </>
  );
}
