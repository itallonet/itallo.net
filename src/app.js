import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './views/home.view';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="*" element={<HomeView />} />
      </Routes>
    </Router>
  );
};

export default App;
