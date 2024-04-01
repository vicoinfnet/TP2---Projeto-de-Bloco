import React from 'react';
import dogeBanner from './doge-banner.jpg'; 
import dogeCentered from './doge-centered.jpg'; 

function SecondBanner() {
  const outerBannerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    height: '759px',
    position: 'relative', 
    color: 'white',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    backgroundImage: `url(${dogeBanner})`,
    backgroundSize: 'auto', 
    backgroundRepeat: 'repeat', 
    filter: 'brightness(80%)',
  };

  const centeredImageStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '500px', 
    width: '800px', 
    backgroundImage: `url(${dogeCentered})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
     filter: 'brightness(80%)',
  };

  const titleStyle = {
    fontSize: '3.75rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    position: 'relative', 
    zIndex: '1',
    color: 'rgb(255, 153, 102)',
  };

  const buttonStyle = {
    border: '2px solid rgb(255, 153, 102)',
    borderRadius: '10px',
    padding: '10px 20px',
    fontSize: '1.75rem',
    cursor: 'pointer',
    background: 'transparent',
    color: 'rgb(255, 153, 102)',
    position: 'relative', 
    zIndex: '1',
  };

  const hoverEffect = {
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={outerBannerStyle}>
      <div style={centeredImageStyle} /> 
      <h2 style={titleStyle}>Uma área importante do site</h2>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = hoverEffect.boxShadow}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = ''}
      >
        ACESSAR AGORA
      </button>
    </div>
  );
}

export default SecondBanner;
