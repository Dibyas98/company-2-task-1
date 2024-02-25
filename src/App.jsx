import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/header/Header";
import Filter from "./component/filter/Filter";
import Property from "./component/proprerty/Property";
import StoreData from "./component/content/storeData";
import Screen from "./Screen";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Liked from "./component/liked/Liked";

function App() {
  const [count, setCount] = useState(0);
  const route = createBrowserRouter([
    {
      path:'/',
      element:<Screen></Screen>
    },
    {
      path:'/like',
      element:<Liked></Liked>
    }
  ])

  return (
    <>
      <StoreData>
        <RouterProvider router={route}></RouterProvider>
      </StoreData>
    </>
  );
}

export default App;
