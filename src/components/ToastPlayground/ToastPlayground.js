import React from 'react'
import Button from '../Button'
import styles from './ToastPlayground.module.css'
import ToastShelf from '../ToastShelf/ToastShelf'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'Oh Snap!',
      variant: 'error',
    },
    {
      id: crypto.randomUUID(),
      message: 'Success!',
      variant: 'success',
    },
  ])
  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])

  function handleCreateToast(event) {
    event.preventDefault()
    const newToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]
    setToasts(newToasts)
    setMessage('')
    setVariant(VARIANT_OPTIONS[0])
  }

  function handleDismiss(id) {
    const newToasts = toasts.filter((toast) => toast.id !== id)
    setToasts(newToasts)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} dismissToast={handleDismiss} />

      <form className={styles.controlsWrapper} onSubmit={handleCreateToast}>
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
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground
