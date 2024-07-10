import type { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
const attachReactComponent = (container: ReactDOM.Container | Element, component: ReactNode) => {
  ReactDOM.createRoot(container).render(<React.StrictMode>{component}</React.StrictMode>);
};
export { attachReactComponent };
// TODO:Preactに移行