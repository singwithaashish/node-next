


async function getBlog(apiUrl, token) {
  return await fetch(`${apiUrl}/blogs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
//   return res;
}


async function user(apiUrl, token) {
    return await fetch(`${apiUrl}/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
}

const deleteBlog = async (apiUrl, _id) => {
  // const apiUrl = useSelector((state) => state.all.apiUrl);
  return await fetch(`${apiUrl}/blogs/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
      _id: _id,
    },
  });
}; 


export { getBlog, user, deleteBlog };