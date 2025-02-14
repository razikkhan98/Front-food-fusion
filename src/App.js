import { Provider } from "react-redux";
import "./App.css";
import RouteRoutes from "./Components/RouteRoutes/routes";
// import { store } from "../src/Components/Common/Redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from "./Components/Redux/store"
import ImageSlider from "./Components/Common/Test/test";
function App() {
  return (
    <>
    <ToastContainer />
      <div className="background-img">
        <Provider store={store}>
          <RouteRoutes />
        </Provider>
        {/* <ImageSlider/> */}
      </div>
    </>
  );
}

export default App;
