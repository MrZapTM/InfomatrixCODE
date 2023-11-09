import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sunny from './assets/sunny-3.png'
import './App.css'
import axios from "axios";

function App() {
    const [packet,setPacket] = useState("0")
    const Data = (props) => {
        return(
            <div className='penis'>
                <div className='mainInf'>
                    <h1 className='penistitle'>
                        {props.data.station}
                    </h1>
                    <h2 className='penislocation'>
                        {props.data.location}
                    </h2>

                    <h3 className='penisSubmitTime'>
                        30.10.2023
                    </h3>
                </div>
                <div className='anotherframe'>
                    <div className='infoframe'>
                        <div className='information'>
                            <h6>
                                Солнечно
                            </h6>
                            <h5>
                                Температура: 23°C
                            </h5>
                            <h5>
                                Влажность: 66%
                            </h5>
                            <h5>
                                Воздух: {props.data.ppm}
                            </h5>
                            <h5>
                                Ветер: 0 км/ч
                            </h5>
                        </div>
                        <div className='soil'>
                            <h5>Влажность почвы: {props.data.moisture} </h5>
                            <h6>Состояния растении: Хорошо</h6>
                            <h6>Уровень калия: -</h6>
                            <h6>Уровень фосфора: -</h6>
                            <h6>Уровень азота: -</h6>
                        </div>

                    </div>
                    <div className='condition'>
                        <img className='condition' src={sunny} alt="" width='80px'/>
                    </div>
                </div>
                <div className='IDS'>
                    <h3 className='ID'>
                        Robot ID: 1
                    </h3>
                    <h3 className='ID'>
                        Station ID: 1
                    </h3>
                </div>
            </div>

        )
    }
    useEffect(() => {
        // GET request using fetch inside useEffect React hook

        setTimeout(() => {
            setPacket("10")
        },360000)

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    },[] );
  return (
    <>
        <div className='asulandaun'>
            <div className='container'>
                <header>
                    <h1>
                        Панель контроля УСМЗИ
                    </h1>
                </header>
                <nav className='menu'>
                    <ul className='ul'>
                        <div className='additional'></div>
                        <li className='smolldick'><button className='menubtn menubtn-active'><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M39 31L35 27M39 31L35 35M39 31L29 31" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>База данных</button></li>
                        <li className='smolldick'><button className='menubtn'><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18V9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V18" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 24V31" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 15V31" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 19V31" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 30V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V30" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>Аналитика данных</button></li>
                        <li className='smolldick'><button className='menubtn'><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 12L4 6V36L17 42L31 36L44 42V12L31 6L17 12Z" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 6V36" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 12V42" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 9L17 12L31 6L37.5 9" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 39L17 42L31 36L37.5 39" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>Карта состоянии ЗИ</button></li>
                        <li className='smolldick'><button className='menubtn'><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 5L2 43H46L24 5Z" fill="none" stroke="#ffffff" stroke-width="4" stroke-linejoin="round"/><path d="M24 35V36" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path d="M24 19.0005L24.0083 29" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/></svg>Опасности</button></li>
                    </ul>
                </nav>
            </div>   <div className='datatable'>
            { packet !== "0" &&

                    <ul className='niggatable'>
                        <li className='data'><Data data={{location:`⁦49°47'25"N⁩ ⁦73°08'53"E⁩`,moisture:"46%",ppm:"480,082",station:"Stop 1"}}/></li>
                        <li className='data'><Data data={{location:`⁦49°47'26"N⁩ ⁦73°08'53"E⁩`,moisture:"42%",ppm:"475,086",station:"Stop 2"}}/></li>
                    </ul>

            }
        </div>

        </div>
    </>
  )
}

export default App
