export default async function getBlog(apiUrl, token) {
  return await fetch(`${apiUrl}/blogs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
//   return res;
}


export async function user(apiUrl, token) {
    return await fetch(`${apiUrl}/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
}