import { useState } from 'react'
import { Scanner } from '@yudiel/react-qr-scanner'

import s from './QrCodeScanner.module.css'


export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null)
    
    const scanHandler = (result) => {
        setScanned(result[0].rawValue)
    }

    return (
        <div className={s.container}>
            <Scanner
                allowMultiple
                onScan={scanHandler}
                components={{
                    finder: false,
                }}
                sound={false}
                styles={{
                    container: {width: 500, height: 500}
                }}
            />
            <p className={s.result}>{scanned}</p>
        </div>
        
    )
}