import '../styles/layout/footer.scss';
const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <p className='footer__title'> &copy; Maitane Abad Conde - 2021 </p>

        <nav class='footer__nav'>
          <ul class='footer__nav--list'>
            <li class='footer__nav--list__link'>
              <a
                href='https://github.com/MaitaneAbad'
                target='_blank'
                rel='noreferrer'
                title='Github de Maitane'
              >
                <i class='fab fa-github-square'></i>
              </a>
            </li>
            <li class='footer__nav--list__link'>
              <a
                href='https://www.linkedin.com/in/maitaneabadconde/'
                target='_blank'
                rel='noreferrer'
                title='Linkedin de Maitane'
              >
                <i class='fab fa-linkedin'></i>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
