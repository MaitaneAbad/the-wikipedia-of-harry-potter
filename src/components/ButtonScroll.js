const ButtonScroll = () => {
  const scrollUp = () => {
    const body = document.querySelector('#root');
    body.scrollIntoView(
      {
        behavior: 'smooth',
      },
      1000
    );
  };

  return (
    <div>
      <button className='scroll' onClick={scrollUp}>
        Ascendio
      </button>
    </div>
  );
};
export default ButtonScroll;
