import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Blog, Post, Error } from './pages';
import SharedLayout from './components/SharedLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
