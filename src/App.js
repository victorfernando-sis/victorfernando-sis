
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ErrorPage from './error-page';
import PortfolioItem from './components/PortfolioItem';
import Header from './components/Header'
import Home from './components/Intro'
import AboutMe from './components/AboutMe'
import Work from './components/Work'
import Footer from './components/Footer'
import './App.css';

function App() {
  const router = createBrowserRouter([{
    path: '/victorfernando-sis',
    // path: process.env.PUBLIC_URL + '/',
    element: <>
      <Home />
      <Work />
      <AboutMe />
    </>,
    errorElement: <ErrorPage />,
  },
  {
    path: process.env.PUBLIC_URL + "/work/:projectId",
    element: <PortfolioItem />
  }])

  return (
    <div className={`App`}>
      <Header />
      <RouterProvider router={router} />

      <Footer />
    </div>
  );
}

export default App;
