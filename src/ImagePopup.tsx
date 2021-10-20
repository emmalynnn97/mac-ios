import header from './Header.png'
import Gallery from 'react-photo-gallery'
import {photos} from './photos'
interface Props {
    isActive?: boolean
}
const ImagePopup = ({isActive}: Props) => {
    let display = isActive ? 'flex' : 'none'
    return (
      
        <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: display,
            justifyContent: 'center',
            alignItems: 'flex-start'
        }}>
            <div style={{ height: '75%', width: '90%', background: 'rgb(30,30,30)', position: 'relative', top: 50 }}>
                <img style={{width:'100%'}} src={header}/>
                    <Gallery columns={5} targetRowHeight={150} photos={photos}/>
            </div>
        </div>
        
    )
}
export default ImagePopup
