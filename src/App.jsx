import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./util/store";
const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
