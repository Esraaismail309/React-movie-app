import './App.css';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";

import store from './redux/store'
import Moviedetails from './layout/movieDetails/Moviedetails';
import Navbar from './components/shared/Navbar';
import { FilterdMovies } from './layout/filterdMovies/FilterdMovies';
import AllMovies from './layout/AllMovies';
import { WishList } from './layout/WishList';
import { useContext } from 'react';
import { Context } from './locales/Wrapper';

const App = () => {
  const locale = useContext(Context)
  const lang = locale.locale
  const queryClient = new QueryClient()
  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store} >
          <Navbar />
          <Routes>
            <Route path='/' exact element={<AllMovies />} />
            <Route path='/movie-app' exact element={<AllMovies />} />
            <Route path='/movie-app/popularmovies/:page' element={<AllMovies />} />
            <Route path='/movie-app/moviedetails' element={<Moviedetails />} >
              <Route path=':id' element={<Moviedetails />} />
            </Route>
            <Route path='/movie-app/filterdmovie/:page/:query' element={<FilterdMovies />} />
            <Route path='/movie-app/wishlist' element={<WishList />} />
          </Routes>
        </Provider>
        {/* <ReactQueryDevtools position='bottom-right' initialIsOpen={false} /> */}
      </QueryClientProvider></div>
  );
}

export default App;
