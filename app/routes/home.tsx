import type { Route } from "./+types/home";

// LOCAL COMPONENTS
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Welcome to React Router!", index: false },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track your applications & Resume Ratings</h1>
          <h2>Review yor submissions and check AI-powered feedback.</h2>
        </div>
      </section>
    </main>
  );
}
