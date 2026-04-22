import { Button } from "./button";
import { List } from "./List";

export function NameList({ handleScreen, handleNameList, nameList}) {
  function handleClickReturn() {
    handleScreen('home');
  }
  function handleClickConfirm() {
      handleScreen('addItems')
  }
  function handleName (e) {
    handleNameList(e.currentTarget.value)
  }
  
  return (
    <div className="flex flex-col flex-1 gap-4 w-[90vw] p-4 justify-around items-center border border-gray-200 bg-white rounded-xl shadow-xl ">
      <h2 className="text-3xl text-center text-slate-900 leading-normal mt-4">
        Dê um nome para sua lista
      </h2>
      <form className="flex flex-col gap-2 bg-white">
        <label htmlFor="nomeLista" className="text-2xl text-slate-900">nome da lista:</label>
        <input onChange={handleName} id="nomeLista" type="text" placeholder="Ex: Compra do Mês" className="w-full border px-2 text-2xl bg-amber-50" />
      </form>
      <div className="flex gap-4 bg-white">
        <Button innerText="Confirmar" handleClick={nameList && handleClickConfirm} color={'bg-green-600'} active={'active:bg-green-700'} hover={'hover:bg-green-700'} />
        <Button innerText="Voltar" handleClick={handleClickReturn} color={'bg-gray-500'} active={'active:bg-gray-700'} hover={'hover:bg-gray-700'}/>
      </div>
    </div>
  );
}