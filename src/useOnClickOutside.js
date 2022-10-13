import React, { useLayoutEffect } from "react";

const useOnClickOutside = (ref, handler) => {
  useLayoutEffect(() => {
    if (ref.current) {
      console.log(ref);
    }
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };

    document.addEventListener("mouseup", listener);
    return () => document.removeEventListener("mouseup", listener);
  }, [ref]);
};

export default useOnClickOutside;
