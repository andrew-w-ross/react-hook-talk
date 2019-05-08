import { useTestProxy } from "test-react-hooks";
import { useCounter } from "./useCounter";

const [prxCounter] = useTestProxy(useCounter);

it("will throw if inc is less than 1", () => {
  expect(() => prxCounter(0, 0)).toThrow();
});

it("will increment by one", () => {
  {
    const { count, incFn } = prxCounter();
    expect(count).toBe(0);
    incFn();
  }

  {
    const { count } = prxCounter();
    expect(count).toBe(1);
  }
});

it("start with a new initial amount", () => {
  {
    const { count, incFn } = prxCounter(4);
    expect(count).toBe(4);
    incFn();
  }

  {
    const { count } = prxCounter(4);
    expect(count).toBe(5);
  }
});

it("will increment by a new amount", () => {
  {
    const { count, incFn } = prxCounter(0, 2);
    expect(count).toBe(0);
    incFn();
  }

  {
    const { count } = prxCounter(0, 2);
    expect(count).toBe(2);
  }
});

it("will decrement by one", () => {
  {
    const { count, decFn } = prxCounter(0, 2);
    expect(count).toBe(0);
    decFn();
  }

  {
    const { count } = prxCounter(0, 2);
    expect(count).toBe(-2);
  }
});
