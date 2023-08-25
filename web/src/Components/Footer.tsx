import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3">
            <h2 className="text-xl font-bold mb-2">Contato</h2>
            <p>Email: contato@seudominio.com</p>
            <p>Telefone: (123) 456-7890</p>
            <p>Endereço: Sua Rua, Sua Cidade</p>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-xl font-bold mb-2">Links Úteis</h2>
            <ul className="list-disc list-inside">
              <li><a href="/sobre">Sobre Nós</a></li>
              <li><a href="/servicos">Nossos Serviços</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-xl font-bold mb-2">Siga-nos</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>&copy; {new Date().getFullYear()} Marvel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
