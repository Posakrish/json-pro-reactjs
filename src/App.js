// import logo from './logo.svg';
// import './App.css';
// import Dashboard from './Dashboard';
// import { Route, Routes } from 'react-router-dom';
// import Details from './DrinkDetails';

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//           <Route  path="/" element={<Dashboard/>} />
//           <Route path="/Details/:id" element={<Details/>} />
//         </Routes>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";



import Dashboard from "./Dashboard";
import DrinkDetails from "./DrinkDetails";

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>

        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/coffee" element={<Dashboard />} />
          <Route path="/Details/:id" element={<DrinkDetails/>} />
        </Routes>
     
    </Provider>
  );
};

export default App;
