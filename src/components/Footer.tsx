import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F2F2F2] absolute w-full bottom-0 py-2 text-gray-500">
      <ul className="inline-flex gap-6 p-2 text-sm mx-6">
        <li><a href="#" className="hover:underline">Sobre</a></li>
        <li><a href="#" className="hover:underline">Publicidade</a></li>
        <li><a href="#" className="hover:underline">Negócios</a></li>
        <li><a href="#" className="hover:underline">Como funciona a Pesquisa</a></li>
      </ul>
      <ul className="inline-flex gap-6 float-right p-2 text-sm mx-6">
        <li><a href="#" className="hover:underline">Privacidade</a></li>
        <li><a href="#" className="hover:underline">Termos</a></li>
        <li><a href="#" className="hover:underline">Configurações</a></li>
      </ul>
    </footer>
  )
}

export default Footer;