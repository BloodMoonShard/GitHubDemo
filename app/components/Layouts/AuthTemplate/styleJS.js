import BgImage from 'images/bgAuth.png';

const styles = () => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    width: '100vw',
    background: `url(${BgImage})  no-repeat center center fixed`,
    backgroundSize: 'cover',
  },
});

export default styles;
