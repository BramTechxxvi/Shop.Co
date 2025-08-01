import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebookF, FaGithub, FaWhatsapp, FaSnapchat } from "react-icons/fa";

const sections = [
    {
        title: "Company",
        links: [
            "About Us",
            "About",
            "Features",
            "Careesrs",
        ],
    },
    {
        title: "Help",
        links: [
            "Customer support",
            "Delivery Details",
            "Terms & Conditions",
            "Privacy Policy"
        ]
    },
    {
        title: "FAQ",
        links: [
            "Account",
            "Manage Deliveries",
            "Orders",
            "Payment",
        ]
    },
    {
        title: "Resources",
        links: [
            "Free eBooks",
            "Development Tutorial",
            "How to - blog",
            "Youtube Playlist",
        ],
    }
];

const FooterLinkSection = () => {
  return (
    <div>
        <div>
        <Link to="/" className="block">
        <div className="font-extrabold tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <span className="text-black">B</span>
            <span className="text-amber-500">R</span>
            <span className="text-black">A</span>
            <span className="text-stone-700">M</span>
            <span className="text-black">.</span>
            <span className="text-stone-500">CO</span>
        </div>
        </Link>

        <p classsName="w-48 py-5 hover:text-stone-900 transition-colors duration-200 text-stone-700">
            We have clothes that suita your style and which you're proud to wear. From women to men.
        </p>
        <div className="flex gap-3">
            <Link to="#"><FaTwitter className="text-xl" /></Link>
            <Link to="#"><FaInstagram className="text-xl" /></Link>
            <Link to="#"><FaFacebookF className="text-xl" /></Link>
            <Link to="#"><FaGithub className="text-xl" /></Link>
            <Link to="#"><FaWhatsapp className="text-xl" /></Link>
            <Link to="#"><FaSnapchat className="text-xl" /></Link>
        </div>
    </div>
    {sections.map((section, index) => (
        <div key={index} className="w-full sm:w-auto">
            <h3 className="text-lg font-semibold text-black mb-3">{section.title}</h3>
            <ul className="space-y-1 etxt-gray-300">
                {section.links.map((text, index) => (
                    <li key={index}>
                        <Link to="#" className="text-stone-700 hover:text-stone-900 hover:underline transition-colors duration-200">
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    ))}
    </div>
  );
};

export default FooterLinkSection;