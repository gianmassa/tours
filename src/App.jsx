import { useState, useEffect } from "react";
import Tours from "./components/Tours"

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  return (
    <main>
      <h3 className="title">Our Tours</h3>
      <div className="title-underline"></div>
      <Tours url={url} />
    </main>
  )
};
export default App;
