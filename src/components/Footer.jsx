import FooterLinksSection from './FooterLinksSection';
import FooterSocials from './FooterSocials';
import Subscribe from './Subscribe';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <FooterLinksSection />
            <FooterSocials />
            </div>
            <Subscribe />
            <p className="text-center mt-4 text-sm">© 2023 Shop.Co. All rights reserved.</p>
        </div>
        </footer>
    );
};