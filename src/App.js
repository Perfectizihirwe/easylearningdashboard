import { Provider } from "react-redux";
import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  const routing = useRoutes(Themeroutes);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="dark">{routing}</div>;
      </PersistGate>
    </Provider>
  );
};

export default App;
