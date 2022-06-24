import './App.css';
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {Layout} from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import {Verification} from "./components/Verification";
import {FetchData} from "./components/FetchData";

function App() {
  return (
      <Provider store={store}>
        <Layout>
            <Routes>
                <Route exact path='/' component={Verification} />
                <Route exact path='/fetch' component={FetchData} />
            </Routes>
        </Layout>
      </Provider>
  );
}

export default App;
