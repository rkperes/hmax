import { Outlet } from "react-router";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { PageContentFadeIn } from "../components/PageContentFadeIn";

export default function MarketingLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PageContentFadeIn>
          <Outlet />
        </PageContentFadeIn>
      </main>
      <Footer />
    </div>
  );
}
