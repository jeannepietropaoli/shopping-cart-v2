import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import "../../styles/Layout.css";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
          <Outlet />
      </main>
    </>
  );
}
