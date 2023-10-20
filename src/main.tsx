import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./app/store.ts";
import Layout from "./components/ui/Layout.tsx";
import ScrollObserver from "./components/ui/ScrollObserver.tsx";
import CookiePersistor from "./components/ui/custom/CookiePersistor.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiePersistor
        children={
          <BrowserRouter>
            <ScrollObserver>
              <Layout>
                <App />
              </Layout>
            </ScrollObserver>
          </BrowserRouter>
        }
        persistor={persistor}
      />
    </Provider>
  </React.StrictMode>
);
