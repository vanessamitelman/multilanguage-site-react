import React from 'react';
import LoaderWrapper from '../assets/wrappers/LoaderWrapper';

const Loader = () => {
  return (
    <LoaderWrapper>
      <div id='spinner'>
        <div id='inner'></div>
        <div id='outer'></div>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
