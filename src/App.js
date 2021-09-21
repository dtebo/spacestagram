import React from 'react';
import {Provider} from 'react-redux';
import storeRedux from './redux/store';
import ImageList from './components/Images/ImageList';

import './App.css';

const store = storeRedux();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Spacestagram</h1>
        <ImageList />
      </div>
    </Provider>
  );
}

export default App;
