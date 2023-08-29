import { AiOutlineSend } from 'react-icons/ai';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className='footer-top'>
        <div className='footer-content text-white d-grid container'>
          <div className='footer-item'>
            <a href="#" className='navbar-brand text-white text-uppercase no-wrap d-block'>
              G<span>ESTATE</span>
            </a>
            <p className='para-text'>The coolest gaming website experience.</p>
          </div>

          <div className='footer-item'>
            <h5 className='footer-item-title text-uppercase'>quick links</h5>
            <ul className='footer-item-links'>
              <li><a href="#" className='text-white'>Gaming</a></li>
              <li><a href="#" className='text-white'>Product</a></li>
              <li><a href="#" className='text-white'>Social Network</a></li>
              <li><a href="#" className='text-white'>Community</a></li>
            </ul>
          </div>

          <div className='footer-item'>
            <h5 className='footer-item-title text-uppercase'>Supports</h5>
            <ul className='footer-item-links'>
              <li><a href="#" className='text-white'>Setting & Privacy</a></li>
              <li><a href="#" className='text-white'>Help & Support</a></li>
              <li><a href="#" className='text-white'>Live Actions</a></li>
              <li><a href="#" className='text-white'>Our News</a></li>
            </ul>
          </div>

          <div className='footer-item'>
            <h5 className='footer-item-title text-uppercase'>newsletter</h5>
            <p className='para-text'>Subscribe our newsletter to get our latest update & news.</p>

            <form className='newsletter-form'>
              <div className='input-group d-flex align-items-stretch'>
                <input type="text" className="input-group-field" placeholder = "Your email address" />
                <button className='input-group-btn bg-white d-inline-flex align-items-center justify-content-center'>
                  <AiOutlineSend size = { 18 } />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='container d-flex flex-column text-center'>
          <p className='footer-bottom-text text-green'>Copyright &copy; 2023 GeekProbin - All rights reserved.</p>
          <ul className='footer-bottom-links d-flex justif-content-center'>
            <li><a href="#" className='text-white'>Home</a></li>
            <li><a href="#" className='text-white'>Help Center</a></li>
            <li><a href="#" className='text-white'>Contact</a></li>
            <li><a href="#" className='text-white'>Terms & conditions</a></li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer;

const FooterWrapper = styled.footer`
  
`;
