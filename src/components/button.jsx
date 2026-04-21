export function Button({ innerText, handleClick, color, active, hover }) {


  return <button onClick={handleClick} className={`${color} ${active} ${hover} font-medium text-white p-3 rounded-xl active:scale-105 transition-colors duration-200`}>{innerText}</button>;
}
//"bg-green-600 text-white font-medium p-3 rounded-xl active:bg-green-700 active:scale-105 transition-colors"