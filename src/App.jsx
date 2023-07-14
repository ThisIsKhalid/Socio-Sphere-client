import { RouterProvider } from "react-router-dom";
import { LovedCountProvider } from "./context/LovedCountProvider";
import router from "./router/route";

function App() {
  return (
    <>
      <LovedCountProvider>
        <RouterProvider router={router} />
      </LovedCountProvider>
    </>
  );
}

export default App;
