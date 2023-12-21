import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";
import styled from "styled-components";
import { bg } from './assets/images';

const AppContainer = styled.main`
  background: url(${bg}); /* Replace with the correct path to your image */
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: auto;
  color: white;
`;

const App = () => {
  return (
    <AppContainer className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
