import { SSRProvider } from "react-bootstrap";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../Components/Layout";
import CnavBar from "../Components/CnavBar";
import Footer from "../Components/Footer";
import { Provider } from "react-redux";
import { createContext, useState } from "react";
import { store } from "../state/store";
import CreateBlog from "../Components/CreateBlog";




function MyApp({ Component, pageProps }) {
 
  return (
   
    <Provider store={store}>

      <CnavBar/>
      <Component {...pageProps}/>
      <CreateBlog/>
    </Provider>
      
    // </SSRProvider>
  );
}


// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   const res = await fetch('http://localhost:5000/blogs');
//   const data = await footerRes.json(); 
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   return { pageProps, data };
// };



export default MyApp;
