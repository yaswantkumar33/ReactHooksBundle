import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const rendercount = useRef(1);
  const [rendertest, setrendertest] = useState(0);
  const rendderef = useRef();
  useEffect(() => {
    console.log("use effect vcalled ");
    rendercount.current = rendercount.current + 1;
  });
  return (
    <div>
      <h1>UseRef Hook </h1>
      <div>
        <input type="text" ref={rendderef} />
        <p>
          This is the example for the useref hook in react using render count --
          {rendercount.current}
        </p>
        <button
          onClick={() => {
            setrendertest(rendertest + 1);
            rendderef.current.focus();
          }}
        >
          Click to add one to the render count
        </button>
      </div>
    </div>
  );
};

export default UseRef;
