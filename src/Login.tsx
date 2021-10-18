import bg from './bg.png'
import mac from './maclogo2.png'
import { Redirect } from 'react-router-dom'
import { useState } from 'react'
type LoginProps = {

}

const Login = ({ }: LoginProps) => {
    const [inputEntered, setInputEntered] = useState<boolean>(false)
    const [textEntered, setTextEntered] = useState<string>("enter a password")
    const handleChange=(e : any)=>{ 
        setTextEntered(" ")
        setTextEntered(e.target.value)
    }
    return (
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
            <div style={{
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:'column'
            }}>
                <div style={{
                    backgroundImage: `url(${mac})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 125,
                    width: 125,
                }} />
                <span style={{ color: 'white',padding:'31px 0' }}>nami</span>
                    {inputEntered && <Redirect to='/desktop'/>}
                <form onSubmit={
                    
                    (e)=>{setInputEntered(!inputEntered)
                    e.preventDefault()
                    }}>
                        <input 
                        onChange={handleChange}
                        style={{
                            backgroundColor:"rgba(255,255,255,.1)",
                            border:'none',
                            color:'rgba(255,255,255,.26)',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            textAlign:'center',
                            padding:'11px 25px'
                        }}
                        value={textEntered}/>
                </form>
            </div>



        </div>
    )
}
export default Login
