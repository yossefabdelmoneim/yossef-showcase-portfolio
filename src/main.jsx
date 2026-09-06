import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import jetbrainsMonoWoff2 from "@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2?url";
import './index.css'
import App from "./App.jsx";

const jetbrainsMonoStyle = document.createElement("style");
jetbrainsMonoStyle.textContent = `
  @font-face {
    font-family: "JetBrains Mono Variable";
    font-style: normal;
    font-display: swap;
    font-weight: 100 800;
    src: url(${jetbrainsMonoWoff2}) format("woff2-variations");
  }
`;
document.head.appendChild(jetbrainsMonoStyle);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
