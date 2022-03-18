import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100 text-black m-0">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout