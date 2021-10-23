import bg from './bg.png'
import {useState, useEffect} from 'react'
import { ReactComponent as Folder } from './Folder.svg'
import Toolbar from './Toolbar'

import {photos} from './photos'
import {photos2} from './photos2'
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
         if((e.target as Element).className === 'image-popup-modal'){
            setImgPopupActive2(false)
         }
         if((e.target as Element).childElementCount === 5){
            setImgPopupActive2(false)
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
        <div className='folder' onClick={()=>setImgPopupActive2(!imgPopupActive2)} style={{ cursor:'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white', position:'relative',left:17, top:140}}>
            <Folder />
            <span>dfd assets pack</span>
        </div>
        <ImagePopup photos={photos} isActive={imgPopupActive}/>
        <ImagePopup photos={photos2} isActive={imgPopupActive2}/>
       
        <Toolbar />

    </div>)

}
export default Desktop