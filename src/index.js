import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store} from './store';
//import { PersistGate } from 'redux-persist/integration/react';
//import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
{/*<HashRouter>*/}
{/*<PersistGate loading={null} persistor={persistor}></PersistGate>*/}
<BrowserRouter>
    <App />
   </BrowserRouter>
   {/*</PersistGate>*/}
    {/*</HashRouter>*/}
    </Provider>
);


