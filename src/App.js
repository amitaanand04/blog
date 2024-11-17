import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/postDetail';
import DebounceExample from './pages/DebounceExample';
import ThrottlingExample from './pages/ThrottlingExample';
import ReactMemo from './pages/ReactMemo';
import UseMemoExample from './pages/UseMemo';
import StartStopTimer from './pages/StartStopTimer';
import LazyLoading from './pages/LazyLoading';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/debounceExample" element={<DebounceExample />} />
       <Route path="/throttlingExample" element={<ThrottlingExample />} />
       <Route path="/reactMemoExample" element={<ReactMemo />} />
       <Route path="/useMemoExample" element={<UseMemoExample />} />
       <Route path="/startStopExample" element={<StartStopTimer />} />
       <Route path="/lazyloadingExample" element={<LazyLoading />} />
      <Route path="/post/:id" element={<PostDetail />} />
    </Routes>
  </Router>
);

export default App;
