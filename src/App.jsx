import React from 'react';
import NavBar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import './App.css';
import RowPost from './components/rowpost/rowpost';
import {action,originals,comedy,horror,romantic, documentry} from './urls'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Orginals"/>
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={comedy} title="Comedy" isSmall/>
      <RowPost url={romantic} title="Romantic" isSmall/>
      <RowPost url={horror} title="Horror" isSmall/>
      <RowPost url={documentry} title="Documentaries" isSmall/>
    </div>
  );
}

export default App;
