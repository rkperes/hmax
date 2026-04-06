import { Outlet } from "react-router";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export default function MarketingLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
