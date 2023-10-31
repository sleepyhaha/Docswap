import decode from "jwt-decode";

const getToken = () => {
  return localStorage.getItem("id_token");
};

function isTokenExpired(token) {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
}

const login = (token) => {
  localStorage.setItem("id_token", token);

  window.location.assign("/");
};

const logout = () => {
  localStorage.removeItem("id_token");
  window.location.assign("/");
};

const loggedIn = () => {
  const token = getToken();
  return !!token && !isTokenExpired(token);
};

export { loggedIn, isTokenExpired, getToken, login, logout };
