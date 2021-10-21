import React, { ReactElement } from 'react'

interface Props {
    isOpen?: boolean
    onClose?: () => void
}

const MailPopup = ({isOpen = false, onClose}: Props) => {
    return (
        <div style={{
            display: isOpen ? 'block' : 'none',
            position:'absolute',
            top:50,
            width:300,
            height:125,
            background:'rgba(255,255,255,.1)',
            boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.16)',
            border:'.5px inset rgba(255, 255, 255, 0.26)',
            borderRadius:12,
            padding:10,
            zIndex:2
        }}>
            <p style={{color:'white', fontWeight:700, marginBottom:3}}>Do you really want to send mail?</p>
            <p style={{color:'rgba(255, 255, 255, 0.55)',fontSize:11}}>Clicking yes will redirect you to a mail app.</p>
            <div style={{position:'absolute', bottom:20, display:'flex'}}>
                <a href="mailto:ondasnami@gmail.com" className='mail-btn' style={{
                    height:40,
                    width:40,
                    borderRadius:999,
                    padding:10,
                    border: '1px solid rgba(255, 255, 255, 0.55)',
                    marginRight:10,
                    textAlign:'center',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    color:'rgba(255, 255, 255, 0.55)',
                    textDecoration:'none'
                }}>Y</a>
                <a onClick={onClose} className='mail-btn' style={{
                    height:40,
                    width:40,
                    borderRadius:999,
                    padding:10,
                    border: '1px solid rgba(255, 255, 255, 0.55)',
                    marginRight:10,
                    textAlign:'center',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    color:'rgba(255, 255, 255, 0.55)',
                    cursor:'pointer'
                }}>N</a>
            </div>
        </div>
    )
}
export default MailPopup
