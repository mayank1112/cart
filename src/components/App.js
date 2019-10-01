import React from 'react';
import scStore from '../store/scStore';
import { Provider } from 'react-redux'
import Cart from './Cart';

class App extends React.Component {
  render() {
      return (
          <React.Fragment>
              <Provider store={scStore}>
                  <Cart />
              </Provider>
          </React.Fragment>
      );
  }
}

export default App;
