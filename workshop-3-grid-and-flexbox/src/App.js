import React from 'react';

function App() {
  const images = [
    { imageNumber: 1, description: 'Super Saiyan Goku instant transmission' },
    { imageNumber: 2, description: 'Z Force' },
    { imageNumber: 3, description: 'Super Saiyan Goku powering up' },
    { imageNumber: 4, description: 'Super Saiyan Vegito' },
    { imageNumber: 5, description: 'Goku with Arale' },
    {
      imageNumber: 6,
      description: 'Goku and Vegeta, with Yamcha and Tien in the background',
    },
    { imageNumber: 7, description: 'Omega Shenron realistic' },
    { imageNumber: 8, description: 'Perfect Cell realistic' },
    { imageNumber: 9, description: 'Good Majin Buu realistic' },
    { imageNumber: 10, description: 'Imperfect Cell realistic' },
    { imageNumber: 11, description: 'Frieza Final Form Realistic' },
    { imageNumber: 12, description: 'Evil Adult Buu realistic' },
  ];
  return (
    <div className='container'>
      <div className='Logo'>
        <img src='images/logo.png' alt='' />
      </div>

      <header className='Header'>
        <img src='images/header.png' alt='' />
      </header>

      <div className='Profile'>
        <img src='images/profile.png' alt='' />
      </div>

      <nav className='Nav'>
        <a
          href='https://en.wikipedia.org/wiki/Dragon_Ball_Z'
          title='Dragon Ball Z WikiPedia Page'
          target='_blank'
          rel='noreferrer'
        >
          Wikipedia
        </a>
        <a
          href='https://twitter.com/dragonballz'
          title='Dragon Ball Z Twitter'
          target='_blank'
          rel='noreferrer'
        >
          Twitter
        </a>
        <a
          href='http://www.dragonballz.com/'
          title='Dragon Ball Z Official Site'
          target='_blank'
          rel='noreferrer'
        >
          Official Site
        </a>
      </nav>
      <main className='Main'>
        <div className='gallery-container'>
          {images.map(({ imageNumber, description }, index) => (
            <figure key={index} className={`image-${imageNumber}`}>
              <div className={`image-${imageNumber}`}>
                <a
                  href={`images/main-${imageNumber}.jpg`}
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={`images/main-${imageNumber}.jpg`}
                    alt={description}
                    title={description}
                  />
                </a>
              </div>
              <figcaption>This is my image</figcaption>
            </figure>
          ))}
        </div>
      </main>
      <footer className='Footer'>Terms and Conditions | Privacy Policy</footer>
    </div>
  );
}

export default App;
