import { GlobalStyle } from './style'
import { GlobalStyleICon } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux'
import Header from './common/header';
import store from './store'

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalStyleICon />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
