import { useCallback, useEffect, useRef, useState } from "react";

const _default = (_:any) => {};

export default function useStateCallback<T>(initialState:T) : [T,(state: T, cb : (state: T) => void)=>void] {
  const [state, setState] = useState(initialState);

  const cbRef = useRef<(state: T) => void>(_default); // init mutable ref container for callbacks

  const setStateCallback = useCallback((state: T, cb : (state: T) => void) => {
    cbRef.current = cb; // store current, passed callback in ref
    setState(state);
  }, []); // keep object reference stable, exactly like `useState`

  useEffect(() => {
    // cb.current is `null` on initial render, 
    // so we only invoke callback on state *updates*
    if (cbRef.current !== _default) {
      cbRef.current(state);
      cbRef.current = _default; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}