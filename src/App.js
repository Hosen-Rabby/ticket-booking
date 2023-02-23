import logo from "./logo.svg";
import "./App.css";
import FlightBooking from "./components/FlightBooking";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FlightBooking />
      </div>
    </Provider>
  );
}

export default App;