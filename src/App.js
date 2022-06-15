import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import Navbar from './components/shared/Navbar';
import AllMovies from './layout/AllMovies';


function App() {


  return (
    <Provider store={store}>
      <Navbar />
      <AllMovies />
    </Provider>
  );
}

export default App;
