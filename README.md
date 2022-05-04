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

1. Tailwind CSS - Documentation on the classes used
   1. [Padding](https://tailwindcss.com/docs/padding)
   2. [Margin](https://tailwindcss.com/docs/margin)
   3. [Shadow](https://tailwindcss.com/docs/box-shadow-color)
2. [Daisy-UI](https://daisyui.com/) - Component library for Tailwind CSS
3. Built `NavBar` and `Footer` using `<nav>` and `<footer>` tags



## Section 9 - Working with GitHub API

1`.env` file is for environment variables

## Reducers

1. Redux is a third-party state manager as state management solution for React

2. Reducers are there to manage state in application

   1. For e.g. if a user writes something in HTML input field, the application has to manage this UI state

3. A **reducer** is a function that takes in two parameters - the **current state** and an **action** and returns based on both arguments a new state. In a pseudo function it could be expressed as:

   ```jsx
   (state, action) => newState
   ```

4. An **action** is typically an object that has a type and the type is basically a string that can be evaluated; it might also have a payload

   1. For example, if its an action to update a blog post, you would include the blog post itself as a payload in that action object
   2. In our example, we are including the users as a payload in the action object

5. Steps to using Reducer

   1. `GithubReducer.ts`

      ```tsx
      export const GithubReducer = (state, action) => {
        switch (action.type) {
          case "GET_USERS":
            return { ...state, users: action.payload, isLoading: false };
          case "SEARCH_USERS":
            return { ...state, users: action.payload, isLoading: false };
          case "CLEAR_USERS":
            return { ...state, users: action.payload, isLoading: false };
          default:
            return state;
        }
      };
      
      export default GithubReducer;
      
      ```

   2. We then need to have an initial state and also change the method in `fetchUsers`

      `GithubContext.ts`

      ```tsx
      export const GithubProvider = ({ children }) => {
        const initialState = {
          users: [],
          isLoading: true,
        };
      
        const [state, dispatch] = useReducer(GithubReducer, initialState);
        // If we add the function as a dependency in
        // children's useEffect() dep array, we need to
        // memoize the function
        const fetchUsers = useCallback(async () => {
          const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
            },
          });
      
          const data = await response.json();
      
          dispatch({
            type: "GET_USERS",
            payload: data,
          });
        }, []);
          
         // Get search users results
        const searchUsers = async (text) => {
          setLoading();
      
          const params = new URLSearchParams({
            q: text,
          });
      
          const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
            },
          });
      
          const { items } = await response.json();
      	
          // Dispatches an action that updates state in Reducer
          dispatch({
            type: "SEARCH_USERS",
            payload: items,
          });
        };
      
        // clear search results
        const clearUsers = () =>
          dispatch({
            type: "CLEAR_USERS",
            payload: [],
          });
      
      
        return (
         <GithubContext.Provider
            value={{
              users: state.users,
              isLoading: state.isLoading,
              fetchUsers,
              searchUsers,
              clearUsers,
            }}
          >
            {children}
          </GithubContext.Provider>
        );
      };
      
      export default GithubContext;
      
      ```

   3. Switched from putting states into use state values to now having reducers that we can dispach actions to and have those actions from this function update the state in whatever way we want



# House Marketplace

## Section 14 - Firebase 

### PrivateRoute Component

- `App.js`

```tsx
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <NavBar />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

```

- `PrivateRoute.jsx`

```tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const loggedIn = false;
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;

```

