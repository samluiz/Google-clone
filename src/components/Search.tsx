import React from 'react';

const Search: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <label>
        <input type="search" className="border w-560 px-8 py-2.5 rounded-full mt-6" />
      </label>

      <div className="p-8 flex gap-8">
        <button className="bg-gray-100 px-4 py-1.5 text-gray-700 rounded">Pesquisa Google</button>
        <button className="bg-gray-100 px-4 py-1.5 text-gray-700 rounded">Estou com sorte</button>
      </div>
    </div>
  )
}

export default Search;