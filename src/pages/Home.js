import React from 'react';
import { useTranslation } from 'react-i18next';
import HomepageWrapper from '../assets/wrappers/HomepageWrapper';

const Home = () => {
  const { t } = useTranslation();
  return (
    <HomepageWrapper>
      <h1>{t('banner')}</h1>
    </HomepageWrapper>
  );
};

export default Home;
