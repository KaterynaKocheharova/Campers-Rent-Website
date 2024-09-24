import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

// const HomePage = lazy(() => import("./pages/HomePage"));

export default function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return (
    <div id="App">
      <Suspense fallback={null}>
        <Layout>
          HI HI HI 
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes> */}
        </Layout>
      </Suspense>
    </div>
  );
}
