import React from 'react'

import Button from '../Button'
import Toast from '../Toast/Toast'

import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState()
  const [showToast, setShowToast] = React.useState(false)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      {showToast && <Toast variant={variant} message={message} dismissToast={() => setShowToast(false)}></Toast>}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label htmlFor='message' className={styles.label} style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              value={message}
              className={styles.messageInput}
              onChange={(event) => {
                setMessage(event.target.value)
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((item) => {
              return (
                <label key={item} htmlFor={`variant-${item}`}>
                  <input
                    id={`variant-${item}`}
                    type='radio'
                    name='variant'
                    value={item}
                    checked={item === variant}
                    onChange={(event) => {
                      setVariant(event.target.value)
                    }}
                  />
                  {item}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button
              onClick={(e) => {
                setShowToast(true)
              }}>
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToastPlayground
