import { Suspense } from "react";
import AppBar from "./AppBar";
import Loader from "./Loader/Loader";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      hi hi hi
      {/* <Suspense fallback={<Loader />}>{children}</Suspense> */}
      {/* <Loader/> */}
    </div>
  );
};

export default Layout;
