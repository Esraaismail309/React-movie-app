import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import Navbar from './components/shared/Navbar';
import AllMovies from './layout/AllMovies';
import { Routes, Route } from 'react-router-dom';
import Moviedetails from './layout/movieDetails/Moviedetails';
import { Pagination } from './components/shared/Pagination';
import { FilterdMovies } from './layout/filterdMovies/FilterdMovies';

function App() {


  return (
    <Provider store={store}>
      <Navbar />
      {/* <Pagination /> */}
      {/* <FilterdMovies /> */}
      <Routes>
        <Route path='/' element={<AllMovies />} />
        <Route path='/popularmovies' element={<AllMovies />} />
        <Route path='/moviedetails' element={<Moviedetails />} >
          <Route path=':id' element={<Moviedetails />} />
        </Route>
        <Route path='/filterdmovie/:key' element={<FilterdMovies />} />
      </Routes>
    </Provider>
  );
}

export default App;
