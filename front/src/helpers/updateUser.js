async function updateUser(newUser, token) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("authorization", `Bearer ${token}`);

  const userWithoutPassword = Object.keys(newUser).reduce((result, key) => {
    if (key !== "password") {
      result[key] = newUser[key];
    }
    return result;
  }, {});

  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify(userWithoutPassword),
  };

  const res = await fetch(
    `${process.env.REACT_APP_BASE_API_URL_DEV}/user/${newUser._id}`,
    options
  );

  if (res.status === 204) {
    return "Success";
  } else {
    throw new Error("Fetch failed");
  }
}

export default updateUser;
