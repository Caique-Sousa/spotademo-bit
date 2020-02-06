import React from 'react';

import Button from '@bit/caique-sousa.components.button';

import GithubIcon from '../../common/icons/GithubIcon';
import GoogleSlideIcon from '../../common/icons/GoogleSlideIcon';

import SpotahomeLogo from '../../common/SpotahomeLogo';
import HeartIcon from '../../common/icons/HeartIcon';

import './HomePage.scss';

function App() {
  return (
    <div className='app'>
      <div className='app__container'>
        <SpotahomeLogo />
        <br />
        <p>
          <HeartIcon />A Bit about organising components in React
          <HeartIcon />
        </p>
        <br />
        <p>Links to:</p>
        <div className='app__link-wrapper'>
          <Button
            redirectTo='https://docs.google.com/presentation/d/1IgxrLlhFbUy6K6RExsdzBN_RnagSnCR6TIbY0dbyRuk/edit?usp=sharing'
            openNewTab
          >
            <GoogleSlideIcon />
            Slide Presentation
          </Button>
          <Button
            redirectTo='https://github.com/Caique-Sousa/spotademo-bit'
            openNewTab
          >
            <GithubIcon />
            spotademo-bit
          </Button>
          <Button
            redirectTo='https://github.com/Caique-Sousa/spotademo-bit'
            openNewTab
          >
            <GithubIcon />
            spotademo-bit-live
          </Button>
        </div>
        <br />
        <br />
        <a
          className='app__link'
          href='https://spotahome.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Get to know a little bit more about Spotahome
        </a>
      </div>
    </div>
  );
}

export default App;
