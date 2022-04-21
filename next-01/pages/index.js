import Head from "next/head";
import { useEffect, useState } from "react";
import CnavBar from "../Components/CnavBar";
import HomePage from "../Components/HomePage";
import Authenticate from "../Components/Authenticate";
import jwt from "jsonwebtoken";
import { useDispatch, useSelector } from "react-redux";
import { setAllBlogs } from "../state/stateSlice";
import { Spinner } from "react-bootstrap";
import getBlog from "../api/api";

export default function Home({ creating, setCreating }) {
  const [user, setUser] = useState(null);
  const [datas, setDatas] = useState(null);
  const [loading, SetLoading] = useState(true);
  const dispatch = useDispatch();
  const apiUrl = useSelector((state) => state.all.apiUrl);

  useEffect(async () => {
    !loading && SetLoading(true);
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const res = await fetch(`${apiUrl}/blogs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      // const res = await getBlog(apiUrl, token);
      const data = await res.json();
      dispatch(setAllBlogs(data));
      setDatas(data);
    } catch (err) {
      console.log(err);
    }

    // console.log("som");
    if (token) {
      setUser(jwt.decode(token));
      // console.log(user)
    }
    // console.log("here");
    SetLoading(false);
  }, []);

  return (
    <div>
      <Head>
        <title>Topics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* if loading, show loading, else, if user, show home else show authentication */}
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <Spinner animation="border" variant="info" />
          </div>
        ) : user ? (
          <HomePage datas={datas} />
        ) : (
          <Authenticate />
        )}
      </main>
    </div>
  );
}

// ! content is dynamic so ssr is not necessary | required
// export const getStaticProps = async () => {
//   const res = await fetch('http://localhost:5000/blogs', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': localStorage.getItem('token')
//     },}

//   );
//   const data = await res.json();
//   // console.log(data)

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }
//   return {
//     props: {
//       datas: data,
//     },
//   };
// }
