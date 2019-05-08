import { useTestProxy, act } from "test-react-hooks";
import { useOnClickOutside } from "./useOnClickOutside";

const [prxClickOutside, control] = useTestProxy(useOnClickOutside);
const spy = jest.fn();

it("will detect if clicked outside", () => {
  const ref = { current: control.container };

  prxClickOutside(ref, spy);
  expect(spy).not.toHaveBeenCalled();

  act(() => {
    document.dispatchEvent(new Event("click"));
  });

  prxClickOutside(ref, spy);
  expect(spy).toHaveBeenCalled();
});

it("wont call if clicked internally", () => {
  const ref = { current: control.container };

  prxClickOutside(ref, spy);
  expect(spy).not.toHaveBeenCalled();

  act(() => {
    control.container.dispatchEvent(new Event("click"));
  });

  prxClickOutside(ref, spy);
  expect(spy).not.toHaveBeenCalled();
});

it("wont call if clicked internally", () => {
  const ref = { current: control.container };

  prxClickOutside(ref, spy);
  expect(spy).not.toHaveBeenCalled();

  act(() => {
    const button = document.createElement("button");
    control.container.appendChild(button);
    button.dispatchEvent(new Event("click"));
  });

  prxClickOutside(ref, spy);
  expect(spy).not.toHaveBeenCalled();
});

it("won't throw if ref isn't given", () => {
  const ref = { current: null };

  prxClickOutside(ref, spy);
  act(() => {
    document.dispatchEvent(new Event("click"));
  });
  expect(spy).not.toHaveBeenCalled();
});

it("will bind to new spy", () => {
  const newSpy = jest.fn();
  const ref = { current: control.container };
  prxClickOutside(ref, spy);
  prxClickOutside(ref, newSpy);
  act(() => {
    document.dispatchEvent(new Event("click"));
  });
  expect(spy).not.toHaveBeenCalled();
  expect(newSpy).toHaveBeenCalled();
});
