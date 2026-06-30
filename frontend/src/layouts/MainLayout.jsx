import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background: "#0F172A",
        }}
      >
        {children}
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;