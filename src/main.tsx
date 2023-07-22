import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
