import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './views/home.view';
import ANewMilestone from './posts/articles/ANewMilestone';
import "./assets/css/home.css";
import UnveilingRuby from './posts/articles/UnveilingRuby';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Start Posts */}

        <Route path='/post/a-new-milestone' element={<ANewMilestone />} />
        <Route path='/post/unveiling-ruby' element={<UnveilingRuby />} />

        {/* End Posts */}

        <Route path="*" element={<HomeView />} />
      </Routes>
    </Router>
  );
};

export default App;
