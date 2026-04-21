import { useState } from "react";
import { Button } from "./button";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export function AddItems( {handleScreen, handleNameList, nameList, handleCategoria, categoria, setList}) {
    const [item, setItem] = useState('')
    const [toast, setToast] = useState({ visivel: false, mensagem: "" });
    function handleClickStart() {
        handleNameList('')
        handleScreen("home")
    }
    function handleSelectOption(e) {
      handleCategoria(e.target.value)
    }
    function addItem(e) {
      setItem(e.target.value)
    }
    function handleClickAccess () {
      handleScreen('list')
    }
    function handleClickAdd(e) {
        e.preventDefault()
        
        if(!categoria) {
          setToast({visivel:true, mensagem: 'Selecione a categoria'})
          setTimeout(() => {
            setToast({visivel:false, mensagem: ''})
          }, 2500);
        }
        if(!item) {
          setToast({visivel:true, mensagem: 'Digite um item'})
          setTimeout(() => {
            setToast({visivel:false, mensagem: ''})
          }, 2500);
        }
        if(item && categoria) {
  // 1. Pegar dados existentes
  const dados = JSON.parse(localStorage.getItem(nameList)) || {};

  // 2. Se a categoria não existe, cria um array
  if (!dados[categoria]) {
    dados[categoria] = [];

  }

  // 3. Adiciona o item na categoria
  dados[categoria].push(item);

  // 4. Salva de volta
  localStorage.setItem(nameList, JSON.stringify(dados));
  setList(JSON.parse(localStorage.getItem(nameList)))

  setToast({ visivel: true, mensagem: `"${item}" adicionado à lista!` });
  setTimeout(() => {
      setToast({ visivel: false, mensagem: "" });
    }, 2500);
    setItem("");
    }
  }
  return (
    <section className="flex flex-col p-4 gap-10 items-center border border-gray-200 rounded-xl bg-white shadow-xl">
      <h2 className="text-3xl text-slate-900 w-56 text-center mt-6">Adicionar novo item</h2>
      <form action="" className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 ">
          <label htmlFor="categoria" className="text-2xl text-slate-900 bg-white">Selecione a categoria:</label>
          <select value={categoria} onChange={handleSelectOption} id="categoria" className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:ring-offset-2 border px-2 py-1 text-slate-600 bg-amber-50">
            <option value="" disabled selected>      
              Escolha uma opção...
            </option>
            <option value="Mercearia">Mercearia</option>
            <option value="Hortifrúti">Hortifrúti</option>
            <option value="Açougue e Peixaria">Açougue e Peixaria</option>
            <option value="Congelados">Congelados</option>
            <option value="Frios e Laticínios">Frios e Laticínios</option>
            <option value="Padaria e Confeitaria">Padaria e Confeitaria</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Higiene Pessoal">Higiene Pessoal</option>
            <option value="Limpeza">Limpeza</option>
            <option value="Artigos para o Lar">Artigos para o Lar</option>
            <option value="Bebê e Infantil">Bebê e Infantil</option>
            <option value="Pet Shop">Pet Shop</option>
            <option value="Papelaria">Papelaria</option>
            <option value="Utilidades Domésticas">Utilidades Domésticas</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="nomeItem" className="text-2xl text-slate-900">Nome do item:</label>
          <input value={item} onChange={addItem} id="nomeItem" type="text" placeholder="Ex: Leite Integral" className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:ring-offset-2 border px-2 text-2xl text-slate-600 bg-amber-50" />
        </div>
        <div className="flex gap-4 justify-center">
          <Button handleClick={handleClickAdd} innerText="Adicionar" color={'bg-green-600'} active={'active:bg-green-700'} hover={'hover:bg-green-700'}/>
          <Button handleClick={handleClickAccess} innerText="Acessar" color={'bg-blue-600'} active={'active:bg-blue-700'} hover={'hover:bg-blue-700'} />
        </div>
      </form>
      <div 
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-green-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 z-50
          ${toast.visivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
      >
        <CheckCircleIcon className="w-5 h-5 text-emerald-400" />
        <span className="font-medium whitespace-nowrap">{toast.mensagem}</span>
      </div>
      <Button handleClick={handleClickStart} innerText="Inicio" color={'bg-gray-600'} active={'active:bg-gray-700'} hover={'hover:bg-gray-700'}/>
    </section>
  );
}
