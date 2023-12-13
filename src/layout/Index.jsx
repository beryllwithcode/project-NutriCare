import Footer from "../components/footer/footer";
import NavbarDefault from "../components/navbar/navbar";
import { ScrollTop } from "../components/scrolltotop";

function Layout({ children, showNavbarAndFooter = true }) {
  return (
    <>
      {showNavbarAndFooter && <NavbarDefault />}
      <ScrollTop />
      <main>{children}</main>
      {showNavbarAndFooter && <Footer />}
    </>
  );
}

export default Layout;
