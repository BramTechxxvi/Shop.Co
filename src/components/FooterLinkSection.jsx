// import { Link } from "react-router-dom";
// import { FaTwitter, FaInstagram, FaFacebookF, FaGithub, FaWhatsapp, FaSnapchat } from "react-icons/fa";

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

        <p></p>
    </div>
  )
}
