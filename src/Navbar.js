import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

    const [show,setshow] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100)
            {
                setshow(true)
            }
            else setshow(false)
        });
        return ()=>{
            window.removeEventListener('scroll')
        }
    },[])

    return (
        <div className={`nav ${show && 'nav-show'}`}>
            <div>
                <img
                    className='nav-logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' 
                    alt='Netflix logo'
                />
            </div>
            <div>
                <img
                    className='nav-avatar'
                    src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
                    alt='avtar'
                />
            </div>
        </div>
    )
}

export default Navbar
