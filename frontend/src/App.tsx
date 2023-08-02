import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Login, Error404 } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute } from "./hoc";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        draggable
        rtl={false}
        closeOnClick
        pauseOnHover
        theme="colored"
        hideProgressBar
        pauseOnFocusLoss
        autoClose={3000}
        newestOnTop={false}
        position="bottom-left"
        style={{ fontSize: "var(--font-md)" }}
      />
    </>
  );
}

export default App;
