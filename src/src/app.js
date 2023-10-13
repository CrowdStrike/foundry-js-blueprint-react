import React from 'react';
import {
  HashRouter,
  Outlet,
  Routes,
  Route
} from "react-router-dom";
import { useFalconApiContext, FalconApiContext } from './contexts/falcon-api-context.js';
import { Home } from './routes/home.js';
import ReactDOM from 'react-dom/client';

import "@crowdstrike/tailwind-toucan-base/index.css";
import "@crowdstrike/falcon-shoelace/dist/style.css";

function Root() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

function App() {
  const { falcon, navigation, isInitialized} = useFalconApiContext();

  return (
    <React.StrictMode>
      <FalconApiContext.Provider value={{ falcon, navigation, isInitialized }}>
        <HashRouter>
          <Root />
        </HashRouter>
      </FalconApiContext.Provider>
    </React.StrictMode>
  );
}

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);

root.render(<App />);
