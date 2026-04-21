import {TrashIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export function SavedList ({handleScreen, setList, setScreenList}) {
    const [savedLists, setSaveLists] = useState([])

    useEffect(() => {
        const keys = Object.keys(localStorage)
        setSaveLists(keys)
    },[])

    function removeList (list) {
        localStorage.removeItem(list)
        setSaveLists((oldLists) => oldLists.filter((key) => key !== list ))
    }
    function openList (e) {
        setScreenList(2)
        setList(JSON.parse(localStorage.getItem(e.target.value)))
        handleScreen('list')
    }
     function handleClickReturn() {
    handleScreen('home')
  }

    return (
        <section>
            <div className='flex flex-col items-center mb-20'>
                <ul className='flex flex-col gap-5'>
                    {savedLists.map((list, index) => {
                        return (
                            <li key={index} className="flex w-full justify-between items-center gap-4">
                                 <button value={list} onClick={openList} className="flex-1 border border-blue-200 bg-blue-50 text-blue-700 text-lg text-left p-4 rounded-xl line-clamp-2 active:bg-blue-100 transition-colors">{list}</button>
                                 <button value={list} onClick={() => removeList(list)} className="bg-red-100 active:bg-red-200 transition-colors text-red-500 p-3 rounded-xl w-12 h-12 " title='Remover item'><TrashIcon className="w-5 h-5" /></button>
                            </li>
                        )
                    })}
                </ul>
                {savedLists.length === 0 &&  <p>Sem listas salvas atualmente</p>}
                <button onClick={handleClickReturn} className="fixed bottom-8 bg-gray-400 font-medium text-white p-3 rounded-xl active:bg-gray-700 hover:bg-gray-700 transition-colors`">Voltar</button>
            </div>
        </section>
    )
}