import InstagramIcon from "../assets/InstagramIcon";
import MetaIcon from "../assets/MetaIcon";
import TwitterIcon from "../assets/TwitterIcon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-y-2 md:gap-y-0 px-8">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl font-bold">QuickCart</h1>
          <p className="text-gray-400 mt-2">
            Your favorite products, just a click away.
          </p>
        </div>
        <div className="flex justify-center gap-x-6 md:mb-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <MetaIcon dimension={8} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <TwitterIcon dimension={8} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon dimension={8} />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-6">
        © {new Date().getFullYear()} QuickCart
      </div>
    </footer>
  );
};

export default Footer;
