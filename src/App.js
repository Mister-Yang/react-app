import { GlobalStyle } from './style'
import { GlobalStyleICon } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import store from './store'

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalStyleICon />
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}/>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path='/detail' exact component={Detail} />
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
