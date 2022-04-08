import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";

function Blogpost() {
  const router = useRouter();
  const { title, description, imgUrl, author, time, id } = router.query;

  // var date = new Date(time)
  // .toISOString().substring(0, 10);

  return (
    <Container>
      <div className="d-flex flex-column align-items-center text-center">
        <h2>{title}</h2>
        <div className="d-flex ms-auto">
          <h6 className="text-secondary me-2">{author}</h6>
          <h6 className="text-secondary">
            {/* {date} */}
          </h6>
        </div>

        <img src={imgUrl} className="rounded w-75 my-5" />
        <p>{description}</p>
      </div>
    </Container>
  );
}

export default Blogpost;
