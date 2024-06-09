import { Route, Routes } from "react-router-dom";
import Footer from "./footer"
import Navbar from "./navbar"
import { routes } from "../constants/routes";

const App = () => {
  return (
      <div>
          <Navbar />

          {
              <div>
                  <Routes>
                      {routes.map(({ id, path, element }) => (
                          <Route key={id} path={path} element={element} />
                      ))}
                  </Routes>
              </div>
          }
          <Footer />
      </div>
  );
}

export default App
