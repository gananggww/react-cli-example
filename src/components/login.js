import {useState, useEffect} from 'react'

export default function Login({nama, untukMamakKu, perintahRealtime}) {
    const [show, setShow] = useState(true)
    const [isi, setIsi] = useState('Hide Aku')

    const onShow = () => {
        if (show){
            return (
                <div>
                    Hallo aku Component {nama}
                </div>
            )
        }
        else{
            return (
                <div>aku di hide</div>
            )
        }
    }
    const onCombining = () => {
        untukMamakKu("ini seruan ku untuk mama")
        setShow(false)
        show === true ? setShow(false) : setShow(true)
    }

    const onCombineingHide = () => {
        if (show){ 
            setShow(false) 
            setIsi("Show Aku")
        } else{
            setShow(true)
            setIsi("Hide Aku")
        }
    }

    // useEffect(() => {

    //     // onCombineingHide()

    //     return () => {

    //     }
  
    // }, [isi])


    return (
    <div className="App`">
        {onShow()}
        <br></br>
        <button onClick={() => onCombining()}>
            Aku memerintahkan pada ibu ku
        </button>

        <button onClick={() => onCombineingHide()}>{isi}</button>

        <br></br>
        <input onChange={(e) => perintahRealtime(e)} placeholder="masukan perintah dua"/>
    </div>
  );
}

