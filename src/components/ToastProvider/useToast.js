import { useContext } from 'react'
import { Context } from '.'

export default function useToast () {
  return useContext(Context)
}
