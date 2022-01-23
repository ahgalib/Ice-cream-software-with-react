import React from 'react';
import './App.css';
import Body from './component/Body/Body';

import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Layout from './component/Layout/Layout';



function App() {
  return (
    <Layout>
      <Header/>
      <Body/>
      <Footer/>
    </Layout>
  );
}

export default App;
