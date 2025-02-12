import axios from "axios";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./components/Redux/App/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

 axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.request.use(async (config) => {

  const token = localStorage.getItem("access-token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.withCredentials = true;
  return config;
});

const refreshAccessToken = async () => {
  try {
    const response = await fetch(
      `${window.env.VITE_APP_API}/user/refresh-token`,
      {
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      }
    );

    const data = await response.json();
    if (data?.token) {
      localStorage.setItem("access-token", data.token);
      return data.token;
    } else {
      localStorage.clear();
      // If token refresh fails or for other errors, reject the promise
      window.location.replace("/login");
      return undefined;
    }
  } catch (error) {
    localStorage.clear();
    // If token refresh fails or for other errors, reject the promise
    window.location.replace("/login");
    return undefined;
  }
};

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;
    if (
      error?.response?.status === 401 &&
      !prevRequest?.sent 
    ) {
      prevRequest.sent = true;

      const refreshedToken = await refreshAccessToken();

      if (refreshedToken) {
        // Retry the original request with the new token
        error.config.headers.Authorization = `Bearer ${refreshedToken}`;
        return axios(error.config);
      }
    } else if (error?.response?.status === 401 ) {
      localStorage.removeItem("id");
      localStorage.removeItem("access-token");
      localStorage.removeItem("role");
      localStorage.removeItem("user");
      localStorage.removeItem("isLogged");
      window.location.replace("/");
    } else {
      return Promise.reject(error);
    }
  }
);



root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
