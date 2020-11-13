import React from 'react';
import Main from "./modules/main/main";
import store from "./config/store";
import {Provider} from 'react-redux'


function App() {
    return (
    <Provider store={store}>
        <Main />
    </Provider>
  );
}

export default App;
