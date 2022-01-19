import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';

const Router = () => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/blog' element={<BlogPage />} />
      <Route exact path='/portfolio' element={<PortfolioPage />} />
      <Route exact path='/about' element={<AboutPage />} />
    </Routes>
  )
};

export default Router;
