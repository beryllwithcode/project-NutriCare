import Footer from "../components/footer/footer"
import NavbarDefault from "../components/navbar/navbar"


function Layout({ children }) {
  return (
    <>
      <NavbarDefault />
      <main>
        {children}        
      </main>
      <Footer />
    </>
  )
}

export default Layout