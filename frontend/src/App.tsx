import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Home, Login, Error404 } from "./pages";

import { PrivateRoute } from "./hoc";

import { setUser } from "./reducers";

import { getUserFromLocalStorage } from "./services";

const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();

  dispatch(setUser(getUserFromLocalStorage()));

  return (
    <>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>

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
