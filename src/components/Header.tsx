import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-row justify-end px-2">
      <nav>
        <ul className="inline-flex items-center gap-5 p-2 text-[13px] font-sans">
          <li><a href="#" className="hover:underline">Gmail</a></li>
          <li><a href="#" className="hover:underline">Imagens</a></li>
          <li><a href="#" className=" hover: fill-neutral-500"><svg className=" w-6 h-6" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg></a></li>
          <li><button className=" bg-[#2575df] text-white px-0.5 py-2 w-[7.5rem] rounded text-[14px] hover:bg-[#3283ec]">Fazer Login</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;