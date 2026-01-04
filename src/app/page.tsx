import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-semibold text-[var(--text-primary)]">
          Welcome to DCC
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
          Content goes here.
        </p>
      </main>
    </div>
  );
}
