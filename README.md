## useRef in React

`useRef` is a React Hook used to **store mutable values or access DOM elements** without causing a component to re-render.

### Key Points
- Persists values across renders
- Changing `ref.current` does **not** trigger a re-render
- Commonly used to access DOM elements

### Use Cases
- Focus or access input elements (`inputRef.current.focus()`)
- Store timers or interval IDs
- Keep track of previous values
- Avoid unnecessary re-renders


## Controlled vs Uncontrolled Components 

### Controlled Components

A **controlled component** is one where **form data is controlled by React state**.

#### Key Points
- Uses `useState`
- Input value comes from state
- Updates handled via `onChange`
- Better control and validation


<input value={name} onChange={(e) => setName(e.target.value)} />


### Uncontrolled Components

An **uncontrolled component** is one where **form data is handled by the DOM itself** using refs.

#### Key Points
- Uses `useRef`
- No state updates on change
- Value accessed only when needed
- Less control, simpler to use

<input ref={inputRef} />


## useImperativeHandle in React

`useImperativeHandle` is a React Hook used with `forwardRef` to **customize the values or methods exposed to a parent component** through a ref.

### Why use it?
Normally, refs expose the **entire DOM element or component**.  
`useImperativeHandle` lets you **control what the parent can access**.

### Key Points
- Works only with `forwardRef`
- Controls what is exposed via `ref`
- Improves encapsulation
- Avoids direct DOM manipulation by parent


import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));

  return <input ref={inputRef} />;
});

export default Input;

