import { ShoppingCartIcon} from '@heroicons/react/24/outline';
import { Button } from './button';

export function List({ nameList, handleScreen, list, screenList, setScreenList}) {
  function handleClickReturn() {
    setScreenList(1)
     if(screenList === 1) {
      handleScreen('addItems')
    } else {
    handleScreen('savedList')
  }
  }
  return (
    <section>
      <div className="flex flex-col gap-6 items-center" >
        {Object.entries(list).map(([categoria, itens]) => {
          return (
            <div key={nameList} className='flex flex-col gap-10 mb-16'>
              <h3 className="text-4xl text-center leading-normal text-slate-900">{categoria}</h3>
              <ul className="flex flex-col gap-4">
                {itens.map((item, index) => {
                    return (
                     <li key={index} className="flex items-center justify-between gap-4"> 
                       <span className="px-2 border border-slate-300 bg-white text-slate-600 text-3xl text-center rounded-xl leading-normal" >{item}</span>
                       <button className="bg-blue-50 text-xl p-3 text-blue-600 rounded-xl" title='carrinho'><ShoppingCartIcon className='w-9 h-9'/></button>
                     </li>
                    )
                })}
              </ul>
            </div>
          );
        })}
        <button onClick={handleClickReturn} className="fixed bottom-4 bg-gray-400 font-medium text-white p-3 rounded-xl active:bg-gray-700 hover:bg-gray-700 transition-colors`">Voltar</button>
      </div>
    </section>
  );
}
