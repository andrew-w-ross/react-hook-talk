import { useEffect, useState } from "react";

export function useAsync(fn) {
  const [value, setValue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fn().then(v => {
      setValue(v);
      setIsLoading(false);
    });
  }, [fn]);
  return {
    value,
    isLoading
  };
}
