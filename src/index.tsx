import React from "react";
import ReactDOMClient from "react-dom/client";
import { Home } from "./screens/Home";
import { MacbookPro } from "./screens/homePage/MacbookPro";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
// root.render(<Home />);
root.render(<MacbookPro />);
