import { useParams } from 'react-router-dom'
export default function OrderStatusPage(){
  const { orderId } = useParams()
  return <div>Order #{orderId} — processing…</div>
}
