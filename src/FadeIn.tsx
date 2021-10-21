import React, { ReactElement } from 'react'
import { ReactComponent as Mail } from './Mail.svg'

interface Props {
    isOpen?: boolean
}

const FadeIn = ({isOpen = true}: Props) => {
    return (
        <a href="#" className='slide-in' style={{
            display: isOpen ? 'block' : 'none',
            width:275,
            height:85,
            background:'rgba(255,255,255,.1)',
            position:'absolute',
            top:60,
            right:10,
            boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.16)',
            border:'.5px inset rgba(255, 255, 255, 0.26)',
            borderRadius:12,
            zIndex:1

        }}>
            <div>
                <div style={{padding:10}}>
                    <div style={{display:'flex',justifyContent:'space-between', alignItems:'center', marginBottom:6}}>
                        <Mail style={{width:18,height:18}}/>
                        <span style={{fontSize:11,color:'rgba(255, 255, 255, 0.55)'}}>5m ago</span>
                    </div>
                    <p style={{fontSize:18, color:'white', fontWeight:700}}>New Link Available for Nami</p>
                    <p style={{fontSize:12, color:'white'}}>Click here to navigate to new music</p>
                </div>
            </div>
        </a>
    )
}
export default FadeIn
