import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import CategoriesTitle from '../components/CategoriesTitle';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />
    <CategoriesTitle />

  </div>
);

export default App;

