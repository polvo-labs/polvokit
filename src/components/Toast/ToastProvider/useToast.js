import { useContext } from 'react'
import { Context } from 'src/components/Toast/ToastProvider/index'

export default function useToast () {
  return useContext(Context)
}
