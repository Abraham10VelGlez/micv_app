import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>MI CV</h1>
      <div className="card">

        
          <p  >
            <samp>
              Abraham
              <br /> <b> Me gusta la leche con chocolate</b>
              <b> Y vender dulces</b>
            </samp>
            <br />
            <br />
            <br />
            <br />
          </p>
          
          <div >
            <img src="https://github-readme-stats.vercel.app/api/top-langs?username=DuarteDc&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false&order=2" height="150" alt="languages graph" />
            <img src="https://github-readme-stats.vercel.app/api?username=Abraham10VelGlez&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=en&hide_border=false&order=1" height="150" alt="stats graph" />
            <img src="https://streak-stats.demolab.com?user=Abraham10VelGlez&locale=en&mode=daily&theme=dracula&hide_border=false&border_radius=5&order=3" height="150" alt="streak graph" />
            <img src="https://github-profile-trophy.vercel.app?username=Abraham10VelGlez&theme=dracula&column=-1&row=1&margin-w=8&margin-h=8&no-bg=false&no-frame=false&order=4" height="150" alt="trophy graph" />
          </div>
          <br />

      </div>
      <p className="read-the-docs">
       Portafolio
      </p>
    </>
  )
}

export default App
