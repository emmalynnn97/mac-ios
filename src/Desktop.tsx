import bg from './bg.png'
import {useState} from 'react'
import { ReactComponent as Folder } from './Folder.svg'
import Toolbar from './Toolbar'
import FadeIn from './FadeIn'

import ImagePopup from './ImagePopup'

type DesktopProps = {

}

const Desktop = ({ }: DesktopProps) => {
    const [imgPopupActive, setImgPopupActive] = useState(false)
    return(
    <div style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 25%',
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
        <div onClick={()=>setImgPopupActive(!imgPopupActive)} style={{ cursor:'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white' }}>
            <Folder />
            <span>Photos</span>
        </div>
        <div onClick={()=>setImgPopupActive(!imgPopupActive)} style={{ cursor:'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white', position:'relative',left:17, top:140}}>
            <Folder />
            <span>dfd assets pack</span>
        </div>
        <ImagePopup isActive={imgPopupActive}/>
       
        <Toolbar />

    </div>)

}
export default Desktop