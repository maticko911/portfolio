import React, {useState} from 'react'

const useAlert = () => {
    const [alert, setAltert] = useState({show: false, text: '', type:'danger'})

    const showAlert = ({ text, type ='danger' }) => setAltert({ show: true,
        text,
        type
    })

    const hideAlert = () => setAltert({
        show: false,
        text: '',
        type: 'danger'
    })


  return { alert, showAlert, hideAlert}
}

export default useAlert