export function getUri() {
  if (process.env.ENV === "production") {
    return process.env.PROD_URI;
  } else {
    return process.env.ENV === "test"
      ? process.env.TEST_URI
      : process.env.LOCAL_URI;
  }
}
