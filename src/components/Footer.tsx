import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F2F2F2] absolute w-full bottom-0 py-2 text-gray-500">
      <ul className="inline-flex gap-6 p-2">
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Publicidade</a></li>
        <li><a href="#">Negócios</a></li>
        <li><a href="#">Como funciona a Pesquisa</a></li>
      </ul>
      <ul className="inline-flex gap-6 float-right p-2">
        <li><a href="#">Privacidade</a></li>
        <li><a href="#">Termos</a></li>
        <li><a href="#">Configurações</a></li>
      </ul>
    </footer>
  )
}

export default Footer;