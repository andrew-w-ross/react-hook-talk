import { useState } from "react";

export function useCounter(init = 0, inc = 1) {
  if (inc < 1) throw new Error("Increment has to be greater than 0");
  const [count, setCount] = useState(init);

  return {
    count,
    incFn: () => setCount(count + inc),
    decFn: () => setCount(count - inc)
  };
}
