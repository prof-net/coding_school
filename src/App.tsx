import React from 'react';
import Main from "./modules/main/main";
import store from "./config/store";
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
    <Provider store={store}>
        <BrowserRouter>
        <Main />
        </BrowserRouter>
    </Provider>
  );
}

export default App;
