import React from 'react';
import { useTranslation } from 'react-i18next';
import FooterWrapper from '../assets/wrappers/FooterWrapper';

const Footer = () => {
  const { t } = useTranslation();
  return <FooterWrapper>{t('footer')}</FooterWrapper>;
};

export default Footer;
