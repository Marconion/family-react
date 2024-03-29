import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { Feed } from "./components/Feed";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { GalleryPage } from "./components/GalleryPage";

// const pageRouter = createHashRouter([
//   {
//     path: "./home",
//     element: <Feed />,
//   },
//   {
//     path: "./galerija",
//     element: <GalleryPage />,
//   },
// ]);

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      {/* <RoutersProvider router={pageRouter} /> */}
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
