const paymentImages = ["Badge", "Badges", "Badge (1)", "Badge (3)"];

export const FooterSocials = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mt-6 px-4 ">
        <p className="text-sm text-center md:text-left">
            Kodak.co 2020202, All Rights Reserved
        </p>

        <div className="flex gap-2 flex-wrap justify-content md:justify-end cursor-pointer">
            {paymentImages.map((img, index) => (
                <img 
                key={index}
                src={`/${img}.png`}
                alt={`${img} payment method`}
                className="h-10 w-70 object-contain hover:scale-105 transition-transform duration-300"/>
            ))}
        </div>
    </div>
  );
}

export default FooterSocials;