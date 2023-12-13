import Header from "../header/header";
import { Outlet } from "react-router";
import Footer from "../footer/footer";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-6" style={{ flex: "1" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
