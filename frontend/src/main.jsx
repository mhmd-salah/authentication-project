import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter";

const container = document.getElementById("root");

try {
  if (container) {
    const root = createRoot(container);
    root.render(<AppRouter/>);
  } else {
    const error = new Error("container not found");
    error.statusCode = 500;
    error.code = "NO_CONTAINER";
    console.error("App failed to start: ", error);
    throw error;
  }
} catch (err) {
  console.error("Critical Application Error: ", {
    message: err.message,
    statusCode: err.statusCode || 500,
    code: err.code,
  });
}
