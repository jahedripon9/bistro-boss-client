import React from 'react';
import ContactFollow from './ContactFollow';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='max-w-screen-xl mx-auto'>
            <footer className="text-gray-600 body-font ">
                <ContactFollow />
                <div className="bg-gray-100 rounded-lg">
                    <div className="container mx-auto py-4 px-5 ">
                        <p className="text-gray-500 text-xl text-center "><small> Copywrite {year}</small>
                            <a href="https://github.com/jahedripon9" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Jahed Ahmed</a>
                        </p>
                        
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;