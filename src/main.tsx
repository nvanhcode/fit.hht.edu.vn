
  import { createRoot, hydrateRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  const container = document.getElementById("root")!;

  // Bản build đã có HTML render sẵn (prerender) thì hydrate, còn khi chạy dev thì render bình thường
  if (container.firstElementChild) {
    hydrateRoot(container, <App />);
  } else {
    createRoot(container).render(<App />);
  }
