import { useState } from "preact/hooks";

const Page = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}>
        aaa{count}
      </button>
    </>
  );
};
export default Page;
