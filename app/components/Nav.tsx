"use client"
import React, { useState } from 'react'
import './style.css'

const Nav: React.FC = () => {
    const [dark, setMode] = useState(true);
    const [navColor, setNavColor] = useState('#4c5b7c')
    const changeMode = () => {
        if (dark) {
            setMode(false);
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
            setNavColor('#6c5ce7')
        }
        else {
            setMode(true);
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'grey'
            setNavColor('#4c5b7c')
        }
    }

    return (
        <>
            <div className="nav c" style={{ backgroundColor: navColor }}>
                <div className='c'><h1>DevLink</h1></div>
                <div className="navLeft c">
                    <div className='c' style={{ gap: "30px" }}>
                        <div className='cursor'>SignIn</div>
                        <div className='cursor'>Login</div>
                        <div className='cursor'>Contact</div>
                    </div>
                    <div className='cursor' onClick={changeMode}>{dark ? 'Light' : 'Dark'}</div>
                </div>
            </div>
        </>
    )
}

export default Nav