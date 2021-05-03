console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

/* In this below example we name the default already in the utils.js file. This doesn't change the fact that the default can be renamed to anything when imported in the app.js file.*/
// EXPORT DEFAULT EXAMPLE A //
// const subtract = (a, b) => a - b;
// export default subtract;

/* In this example we skip the step of creating a named function altogether. The subtraction code will be exported as the default function and when importing it in the app.js file the user would (re)name it whatever they want anyway and it would still work!. (I imagine this might get a bit confusing though, but it saves lines of code I suppose...)*/
// EXPORT DEFAULT EXAMPLE B //
export default (a, b) => a - b;

// export { square, add, subtract as default };

// exports - single default export - many named exports
