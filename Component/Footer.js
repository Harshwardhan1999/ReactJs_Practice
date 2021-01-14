import React from 'react';
import { Button } from './Button';
import './Footer.css';
import {Link} from 'react-router-dom'

function  Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adveture newsletter to recieve our best vacation deals.
                </p>
                <p className='footer-subsription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-area'>
                    <form>
                        <input type='email' name='email' placeholder=
                        'Your Email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>
                            Subscription
                        </Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <h2>About Us</h2>
                        <Link to='/SignUp'> How it works</Link>
                        <Link to='/'>Testomonials</Link>
                        <Link to='/SignUp'>Investors</Link>
                        <Link to='/SignUp'>Terms of Services</Link>
                    </div>

                    <div className='footer-links-items'>
                        <h2>Contact Us</h2>
                        <Link to='/SignUp'> How it works</Link>
                        <Link to='/'>Testomonials</Link>
                        <Link to='/SignUp'>Investors</Link>
                        <Link to='/SignUp'>Terms of Services</Link>
                    </div>
                </div>

                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <h2>Media</h2>
                        <Link to='/SignUp'> How it works</Link>
                        <Link to='/'>Testomonials</Link>
                        <Link to='/SignUp'>Investors</Link>
                        <Link to='/SignUp'>Terms of Services</Link>
                    </div>

                    <div className='footer-links-items'>
                        <h2>Social Media</h2>
                        <Link to='/SignUp'> How it works</Link>
                        <Link to='/'>Testomonials</Link>
                        <Link to='/SignUp'>Investors</Link>
                        <Link to='/SignUp'>Terms of Services</Link>
                    </div>
                </div>
            </div>

            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                        BIHAR<i className='fas fa-route'></i>
                        </Link>
                    </div>
                    <small className='website-right'>BIHAR©2020</small>
                <div className='social-icon-link'>
                    <Link className='social-icon-link facebook'
                    to='/'
                    target=''
                    aria-label=''
                    ><i className='fab fa-facebook'/>
                    </Link>

                    <Link className='social-icon-link instagram'
                    to='/'
                    target=''
                    aria-label=''
                    ><i className='fab fa-instagram'/>
                    </Link>

                    <Link className='social-icon-link youtube'
                    to='/'
                    target=''
                    aria-label=''
                    ><i className='fab fa-youtube'/>
                    </Link>

                    <Link className='social-icon-link twitter'
                    to='/'
                    target=''
                    aria-label=''
                    ><i className='fab fa-twitter'/>
                    </Link>

                    <Link className='social-icon-link linkedin'
                    to='/'
                    target=''
                    aria-label=''
                    ><i className='fab fa-linkedin'/>
                    </Link>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;