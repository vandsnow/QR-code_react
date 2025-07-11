import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

import s from'./QrCodeGenerator.module.css'

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('text')
    const [result, setResult] = useState('')

    const onClickHandler = (event) => {
        //alert("all good")

        setResult(value)
        setValue('')
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value)
        setResult('')
    }
    return (
        <div className={s.container}>
            <input
                type='text'
                value={value}
                placeholder='Write text...'
                onChange={onChangeHandler}
                className={s.input}
            />
            <button type='button' className={s.button} onClick={onClickHandler}>
                Generate QR-code
            </button>

            {result !== '' && (
                <div className={s.qrWrapper}>
                    <QRCodeSVG value={result} size={200} />
                </div>
            )}
        </div>
    )
}
