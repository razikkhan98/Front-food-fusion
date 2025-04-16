import { Provider } from "react-redux";
import "./App.css";
import RouteRoutes from "./Components/RouteRoutes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./Components/Redux/store";
import { UseProvider } from "./Components/Context/context";
function App() {
  return (
    <>
      <ToastContainer />
      <div
        className="background-img"
        style={{ height: window?.screen?.height }}
      >
        <Provider store={store}>
          <UseProvider>
            <RouteRoutes />
          </UseProvider>
        </Provider>
      </div>
    </>
  );
}

export default App;
