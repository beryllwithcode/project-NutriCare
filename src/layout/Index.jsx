import Footer from "../components/footer/footer";
import NavbarDefault from "../components/navbar/navbar";
import { ScrollTop } from "../components/scrolltotop";

function Layout({ children }) {
  return (
    <>
      <NavbarDefault />
      <ScrollTop />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
