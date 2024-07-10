import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreRedux from "./redux/PreRedux";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/pre" element={<PreRedux />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
