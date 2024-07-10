import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreRedux from "./redux/PreRedux";
import TookitRedux from "./redux/ToolkitRedux";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/pre" element={<PreRedux />} />
          <Route path="/toolkit" element={<TookitRedux />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
