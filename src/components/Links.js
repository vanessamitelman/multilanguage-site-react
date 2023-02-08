import React from 'react';
import LinksWrapper from '../assets/wrappers/LinksWrapper';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Links = () => {
  const { t } = useTranslation();
  return (
    <LinksWrapper>
      <Link to='/'>{t('nav.home')}</Link>
      <Link to='/blog'>{t('nav.blog')}</Link>
    </LinksWrapper>
  );
};

export default Links;
