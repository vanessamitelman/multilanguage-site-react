import React from 'react';
import { useTranslation } from 'react-i18next';
import ErrorWrapper from '../assets/wrappers/ErrorWrapper';

const Error = () => {
  const { t } = useTranslation();
  return (
    <ErrorWrapper>
      <div>{t('error_page1')}</div>
      <div>{t('error_page2')}</div>
    </ErrorWrapper>
  );
};

export default Error;
