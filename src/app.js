import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './views/home.view';
import ANewMilestone from './posts/articles/ANewMilestone';
import "./assets/css/home.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Start Posts */}

        <Route path='/post/a-new-milestone' element={<ANewMilestone />} />

        {/* End Posts */}

        <Route path="*" element={<HomeView />} />
      </Routes>
    </Router>
  );
};

export default App;
