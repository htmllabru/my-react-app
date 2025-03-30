import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Image from './assets/react.png'
// import ImageWithPreset from './assets/react.png?thumbnail'; 

import './App.css'
// import SomeComponent from './components/SomeComponent.tsx';
const SomeComponent =  React.lazy(() => import('./components/SomeComponent.tsx'));

// const apiUrl = import.meta.env.VITE_API_URL;
// const isDebug = import.meta.env.VITE_DEBUG === 'true';
// const someKey = import.meta.env.VITE_SOME_KEY;
// const dbPasswd = import.meta.env.DB_PASSWORD;
const apiUrl: string = import.meta.env.VITE_API_URL;
const isDebug: boolean = import.meta.env.VITE_DEBUG === 'true';
const someKey: string = import.meta.env.VITE_SOME_KEY;
const dbPasswd: string = import.meta.env.DB_PASSWORD;

console.log(`API URL: ${apiUrl}`);
console.log(`Debug mode: ${isDebug}`);
console.log(`Some key: ${someKey}`);
console.log(`DB PASSWD: ${dbPasswd}`);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <img src={Image} className="logo" alt="картинка" title="картинка" />
      {/* <img src={ImageWithPreset} className="logo" alt="картинка" title="картинка" /> */}

      <SomeComponent />
      <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          счётчик 👉 {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
