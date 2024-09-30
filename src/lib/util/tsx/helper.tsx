// import ReactDOM from "react-dom/client";
// import React from "react";
// import type { ReactNode } from "react";
// const attachReactComponent = (container: ReactDOM.Container | Element, component: ReactNode) => void {
//   ReactDOM.createRoot(container).render(<React.StrictMode>{component}</React.StrictMode>);
// };
import { render } from "preact";
const attachReactComponent = (container, component) => {
  render(component, container);
};
export { attachReactComponent };
// TODO:Preactに移行
