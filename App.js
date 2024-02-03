
import { Provider } from 'react-redux';
import { store } from "./src/Redux/store";
import React from 'react';
import Navigation from './src/Routes';

export default function App() {
  // return <Navigation />;
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
