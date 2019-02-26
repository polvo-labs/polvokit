import { fit } from 'msk'

export default function formatDate (value) {
  return fit(value, '99/99/9999')
}
