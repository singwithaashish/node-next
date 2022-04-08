import CnavBar from "./CnavBar";
import Footer from "./Footer";

function Layout({children }) {
  console.log(children)
  return (
    <div>
      <CnavBar />
      {/* {children} */}
      {/* <Footer/> */}
    </div>
  );
}

export default Layout;
