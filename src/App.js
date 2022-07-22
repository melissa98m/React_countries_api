import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Country from "./pages/Country";
import Countries from "./pages/Countries";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/:country" element={<Country />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
