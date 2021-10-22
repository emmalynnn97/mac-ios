import bg from './bg.png'
import {useState, useEffect} from 'react'
import { ReactComponent as Folder } from './Folder.svg'
import Toolbar from './Toolbar'
import FadeIn from './FadeIn'

import ImagePopup from './ImagePopup'

type DesktopProps = {

}

const Desktop = ({ }: DesktopProps) => {
    const [imgPopupActive, setImgPopupActive] = useState(false)
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white', position: 'relative', top: -130, left:0 }}>
            <Folder />
            <span>music</span>
        </div>
        <div className='folder' onClick={()=>setImgPopupActive(!imgPopupActive)} style={{ cursor:'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white' }}>
            <Folder />
            <span>Photos</span>
        </div>
        <div className='folder' onClick={()=>setImgPopupActive(!imgPopupActive)} style={{ cursor:'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white', position:'relative',left:17, top:140}}>
            <Folder />
            <span>dfd assets pack</span>
        </div>
        <ImagePopup isActive={imgPopupActive}/>
       
        <Toolbar />

    </div>)

}
export default Desktop