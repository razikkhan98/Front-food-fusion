import { Provider } from "react-redux";
import "./App.css";
import RouteRoutes from "./Components/RouteRoutes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./Components/Redux/store";
function App() {
  return (
    <>
      <ToastContainer />
      <div className="background-img">
        <Provider store={store}>
          <RouteRoutes />
        </Provider>
      </div>
    </>
  );
}

export default App;
