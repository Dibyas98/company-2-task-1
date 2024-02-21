import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/header/Header";
import Filter from "./component/filter/Filter";
import Property from "./component/proprerty/Property";
import StoreData from "./component/content/storeData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StoreData>
        <Header></Header>
        <Filter></Filter>
        <Property></Property>
      </StoreData>
    </>
  );
}

export default App;
