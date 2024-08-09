const Footer = () => {
  return (
    <footer className="bg-blue-300 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-2">MOZMARKET</h2>
            <p className="text-sm">
              CNPJ: 79.379.491/0008-50
              <br />
              Av. Marginal, 250 - Maputo City - SC, 88353-100
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <p className="text-sm">
              © 2024 MOZMARKET. Todos os direitos reservados.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Conecte-se conosco:</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-400 transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-300 transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-500 transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
