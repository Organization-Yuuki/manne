import { useState } from 'react'

interface ReturnProp {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useDiscloser = () => {
  // TODO: 1. isOpen stateを定義しよう
  const [isOpen, setIsOpen] = useState(false)

  // TODO: 2. openメソッドを作成しよう
  const handleOpen = () => {
    setIsOpen(true)
  }

  // TODO: 3. closeメソッドを作成しよう
  const handleClose = () => {
    setIsOpen(false)
  }

  // TODO: 4. toggleメソッドを作成しよう
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
}
