import React from 'react';

const Search: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <label>
        <input type="search" className="border w-560 px-8 py-2.5 rounded-full mt-6 hover:drop-shadow-lg focus:border focus:outline-none focus:drop-shadow-lg" />
      </label>

      <div className="p-8 flex gap-2.5 text-[14px]">
        <button className="bg-gray-100 px-4 py-2 text-gray-800 rounded-md hover:outline hover:outline-1 hover:outline-neutral-300 hover:shadow-md focus:outline focus:outline-1 focus:outline-blue-500">Pesquisa Google</button>
        <button className="bg-gray-100 px-4 py-2 text-gray-800 rounded-md hover:outline hover:outline-1 hover:outline-neutral-300 hover:shadow-md focus:outline focus:outline-1 focus:outline-blue-500">Estou com sorte</button>
      </div>
    </div>
  )
}

export default Search;