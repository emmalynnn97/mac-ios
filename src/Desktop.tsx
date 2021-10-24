import bg from './bg.png'
import {useState, useEffect} from 'react'
import { ReactComponent as Folder } from './Folder.svg'
import Toolbar from './Toolbar'

import {photos} from './photos'

import ImagePopup from './ImagePopup'

type DesktopProps = {

}

const Desktop = ({ }: DesktopProps) => {
    const [imgPopupActive, setImgPopupActive] = useState(false)
    const [imgPopupActive2, setImgPopupActive2] = useState(false)

    useEffect(()=>{
        window.addEventListener('click',(e)=>{
            
         if((e.target as Element).className === 'image-popup-modal'){
            setImgPopupActive(false)
         }
         if((e.target as Element).childElementCount === 5){
            setImgPopupActive(false)
         }
        })
    },[])
    return(
    <div  style={{
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        
    }}>
        <a href="https://namiondas.lnk.to/DFD" target="_blank" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white', position: 'relative', top: -130, left:0 }}>
            <Folder />
            <span>music</span>
        </a>
        <div className='folder' onClick={()=>setImgPopupActive(!imgPopupActive)} style={{ cursor:'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white' }}>
            <Folder />
            <span>moodboard</span>
        </div>
        <a target="_blank" href='https://www.dropbox.com/sh/7i2p53sot5pi87x/AAD-xoTM9z0qYe1JOaDAIyvba?dl=0' className='folder' style={{ cursor:'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white', position:'relative',left:17, top:140}}>
            <Folder />
            <span>dfd assets pack</span>
        </a>
        <ImagePopup photos={photos} isActive={imgPopupActive}/>
        
       
        <Toolbar />

    </div>)

}
export default Desktop