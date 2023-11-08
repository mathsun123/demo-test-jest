import { Tab } from "@mui/material";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";

const Login = React.lazy(() => import("./components/Login/Login"));
const EnhancedTable = React.lazy(() =>
  import("./components/EnhancedTable/EnhancedTable")
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/EnhancedTable"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <EnhancedTable />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/Nothing"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <div>Helo</div>
            </Suspense>
          }
        />
      </Routes>

      {/* BottomNavBar outside of Routes */}
      <BottomNavBar />
    </Router>
  );
};

export default App;
