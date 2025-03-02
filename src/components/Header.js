import React, { useEffect } from 'react';
    import { useNavigate, useLocation } from 'react-router-dom';
    import './Header.css';
    import home from './homelogo.png';

    const Header = () => {
        const navigate = useNavigate();
        const location = useLocation();

        useEffect(() => {
            let lastScrollTop = 0;
            const header = document.querySelector('.header');

            const onScroll = () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop) {
                    // Downscroll
                    header.classList.add('hidden');
                } else {
                    // Upscroll
                    header.classList.remove('hidden');
                }
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
            };

            window.addEventListener('scroll', onScroll);

            return () => {
                window.removeEventListener('scroll', onScroll);
            };
        }, []);

        return (
            <header className="header">
                {location.pathname !== '/' && (
                    <button className="home-button nav-button" onClick={() => navigate('/')}>
                        <img src={home} alt="Home" className="home-icon" />
                    </button>
                )}
            </header>
        );
    };

    export default Header;