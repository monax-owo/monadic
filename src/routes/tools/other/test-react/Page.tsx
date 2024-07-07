import { useState, type ReactNode } from "react";

const Page = (): ReactNode => {
  const [count, setCount] = useState(0);
  return (
    <button
      type="button"
      onClick={() => {
        setCount(count + 1);
      }}>
      test{count}
    </button>
  );
};
export default Page;
