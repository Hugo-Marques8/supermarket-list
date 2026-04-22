import {useState, useEffect } from "react";
import "./App.css";
import { NameList } from "./components/NameList";
import { Button } from "./components/button";
import { AddItems } from "./components/AddItems";
import { List } from "./components/List";
import { SavedList } from "./components/SavedList";
function App() {
  const [tela, setTela] = useState('home');
  const [nameList, setNameList] = useState('')
  const [categoria, setCategoria] = useState('')
  const [list, setList] = useState(nameList)
  const [screenList, setScreenList] = useState(1)

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem(nameList)))
  }, [nameList])

  function handleClickCreate() {
    setTela("nameList");
  }
  function handleClickSavedList() {
    setTela('savedList')
  }
  return (
    <div className="flex flex-col min-h-screen w-full items-center gap-16 p-2 bg-gray-50">
      <header className="mt-4 text-center">
        <h1 className="text-slate-900 text-5xl uppercase leading-normal mt-4">
          Minha lista de compras
        </h1>
      </header>
      <main className="flex flex-col flex-1 w-full items-center">
        {tela === "home" && (
          <div className="flex flex-col flex-1 items-center justify-around">
            <h2 className="text-3xl text-center leading-normal">Deseja criar uma nova lista?</h2>
            <Button innerText="Sim" handleClick={handleClickCreate} color={'bg-green-600'} active={'active:bg-green-700'} hover={'hover:bg-green-700'}/>
            <h2 className="text-3xl text-center leading-normal">Lista de compras salvas</h2>
           <Button innerText="Acessar" handleClick={handleClickSavedList} color={'bg-blue-600'} active={'active:bg-blue-700'} hover={'hover:bg-blue-700'}/>
          </div>
        )}
        {tela === 'nameList' && <NameList handleScreen={setTela} handleNameList={setNameList} nameList={nameList}/>}
        {tela ==='addItems' && <AddItems handleScreen={setTela}  handleNameList={setNameList} nameList={nameList} handleCategoria={setCategoria} categoria={categoria} setList={setList}/>}
        {tela === 'list' && <List handleScreen={setTela} nameList={nameList} list={list} screenList={screenList} setScreenList={setScreenList}/>}
        {tela === 'savedList' && <SavedList handleScreen={setTela} setList={setList} setScreenList={setScreenList}/>}
      </main>
    </div>
  );
}

export default App;
