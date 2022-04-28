[TOC]

# Feedback Application

## Section 3 - Components, Props & States

1. Prop Drilling
   1. Passing props from the top to the bottom element
   2. We can use the Context API to solve this problem
   3. Prop drilling refers to the process of sending props from a higher-level component to a lower-level component. To pass the props down from the topmost component, we must do something like this: However, prop drilling can become an issue in itself because of its repetitive code.



## Section 4 - Forms, Validation and Animations

1. Handling change of input using `onChange` field of `input`

2. Simple validation of having text to be more than 10 characters using if statement

3. Should disable form's default submit behavior so that we can check some validation before submitting the form

   1. `event.preventDefault()` basically prevents event to fire. In the case of `submit` event. `event.preventDefault()` will prevent your form to submit.

      We normally prevent `submit` behaviour to check some validation before submitting the form or we need to change values of our input fields or we want to submit using `ajax` calls. For this purpose, we prevent form to be submitted by using:

      ```js
      event.preventDefault();
      // Here comes our custom logic
      ```

   2. `e.preventDefault()` tells the browser that if there is a default behavior for this event on this object, then skip that default behavior.

      So, for example, if you had a submit button that the default behavior was to submit a form and you had a click handler on that button that did a `preventDefault()`, then the browser would not submit the form when the button was clicked. A classic use of this might be when the form doesn't validate so you show the user an error message and don't want the form to be submitted to the server.

      Or another example. If you set up a click handler for a link and you call `e.preventDefault()` in that click handler, then the browser will not process the click on the link and will not follow the href in the link.
      

## Section 5 - Routes

```tsx
<Router>
    <Routes>
        <Route path="/about" element={...}/>
        <Route path="/..." element={...}/>
        <Route path="/..." element={...}/>
    </Routes>
</Router>

```



## Section 6 - Context API & Deployment

1. Solves the problem of prop drilling

2. We need a provider, in order for components to get access to the states and context. We wrap the components that is using the context in the provider

   ```tsx
   const XXXContext = createContext()
   
   const XXXProvider = ({children}) => {
       // states
       // methods etc.
       
       return (
           <XXXContext.Provider value={{...}}>
         		{children}
   		</XXXContext.Provider>
       )
   
   }
   
   ```

   

3. Deploy to Netlify GitHub projects

## `concurrently`: Run multiple commands

- Run both ui and server code
- `npm run dev`
- "dev": "concurrently \"npm run server\" \"npm run start\""
- Used the `concurrently` npm package to run multiple commands concurrently



# Github Finder Project

## Section 8 - Different components