import {useState} from 'react'
import { ReactComponent as Spotify } from './spotify.svg'
import { ReactComponent as Instagram } from './instagram.svg'
import { ReactComponent as Notes } from './Notes.svg'
import { ReactComponent as Music } from './Music.svg'
import { ReactComponent as Mail } from './Mail.svg'
import MailPopup from './MailPopup'
import FadeIn from './FadeIn'
interface Props {

}

const Toolbar = ({ }: Props) => {
    const [openMail, setOpenMail] = useState(false)
    return(
        <>
    <div className='bottom-bar' style={{
        padding: '0 14px', 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        width: 'auto', height: 75, 
        position: 'absolute', 
        bottom: 0, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 10,
        borderRadius:16,
        backdropFilter:'blur(96px)',
    }}>
        <a target="_blank" href='https://open.spotify.com/artist/5wIkfOCGLMGSeYTC0F9gdq?si=B6-6OApdSAW4twAZCeIwdQ&nd=1'>
            <Spotify />
        </a>
        <a><Music /></a>
        <a target="_blank" href='https://www.instagram.com/namiondas/?hl=en'><Instagram /></a>
        <a><Notes /></a>
        <a style={{cursor:'pointer'}}><Mail onClick={()=>setOpenMail(!openMail)}/></a>
        
    </div>
    <MailPopup onClose={()=>setOpenMail(false)} isOpen={openMail}/>
    <FadeIn isOpen={!openMail}/>
    </>
    )
}
export default Toolbar