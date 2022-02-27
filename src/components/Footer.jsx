import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full mt-20">
      <div className="w-full h-14 bg-gray-700">
        <div className="px-4 lg:px-0 max-w-screen-xl w-full h-full mx-auto flex items-center justify-between">
          <div><img src="/images/Logo.svg" alt="Logotipo" /></div>
          <div className="w-32 flex items-center justify-between">
            <a href="/" aria-label="Facebook" className="text-gray-50 hover:text-facebook transition"><FaFacebook size={32} /></a>
            <a href="/" aria-label="Twitter" className="text-gray-50 hover:text-twitter transition"><FaTwitter size={32} /></a>
            <a href="/" aria-label="Whatsapp" className="text-gray-50 hover:text-instagram transition"><FaInstagram size={32} /></a>
          </div>
        </div>
      </div>
      <div className="h-12 w-full bg-gray-800 flex items-center justify-center text-gray-50 text-sm">
        <span>&copy; {new Date().getFullYear()} - Domain - Todos os direitos reservados</span>
      </div>
    </footer>
  );
}

export default Footer;