import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import SharedWrapper from '../assets/wrappers/SharedWrapper';
import MainWrapper from '../assets/wrappers/MainWrapper';

const SharedLayout = () => {
  const { lang_Direction } = useSelector((store) => store.blog);

  return (
    <SharedWrapper dir={lang_Direction}>
      <header>
        <Nav />
      </header>
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <Footer />
    </SharedWrapper>
  );
};

export default SharedLayout;
