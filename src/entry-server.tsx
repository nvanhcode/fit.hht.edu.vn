import { renderToString } from "react-dom/server";
import App from "./App";

// Dùng lúc build để render sẵn HTML cho SEO (xem scripts/prerender.mjs)
export function render() {
  return renderToString(<App />);
}
