import bg from './bg.png'
import {ReactComponent as Messages} from './Messages.svg'
import {ReactComponent as Calendar} from './Calendar.svg'
import {ReactComponent as Notes} from './Notes.svg'
import {ReactComponent as Music} from './Music.svg'
import {ReactComponent as Settings} from './Messages.svg'
import {ReactComponent as Folder} from './Folder.svg'
type DesktopProps = {
    
}

const Desktop = ({}: DesktopProps) => (
  
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <a style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column', color:'white', position:'relative', top:-200}}>
                <Folder/>
                <span>music</span>
            </a>
            <a style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column', color:'white'}}>
                <Folder/>
                <span>Photos</span>
            </a>
            <div style={{padding:'0 14px', backgroundColor:'rgba(255, 255, 255, 0.1)', width:'auto', height:75, position:'absolute', bottom: 50, display:'flex',justifyContent:'center', alignItems:'center', gap:7}}>
                <Messages/>
                <Calendar/>
                <Notes/>
                <Music/>
                <Settings/>
            </div>
        </div>
  
)
export default Desktop