import { Provider } from "react-redux";
import "./App.css";
import RouteRoutes from "./Components/RouteRoutes/routes";
// import { store } from "../src/Components/Common/Redux/store";
import { store } from "./Components/Redux/store"
import ImageSlider from "./Components/Common/Test/test";
function App() {
  return (
    <>
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
