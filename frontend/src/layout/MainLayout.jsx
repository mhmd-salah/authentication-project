import { Outlet } from "react-router-dom";
import "./styles.css";
import Header from "../components/header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="routes">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
