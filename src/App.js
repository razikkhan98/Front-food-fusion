import { Provider } from "react-redux";
import "./App.css";
import RouteRoutes from "./Components/RouteRoutes/routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from "./Components/Redux/store"
import AutoSuggestSearch from "./Components/Common/Test/test";
function App() {
  return (
    <>
    <ToastContainer />
      <div className="background-img">
        <Provider store={store}>
          <RouteRoutes />
          {/* <AutoSuggestSearch/> */}
        </Provider>
      </div>
    </>
  );
}

export default App;
