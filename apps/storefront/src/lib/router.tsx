import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../pages/AppLayout'
import CatalogPage from '../pages/CatalogPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OrderStatusPage from '../pages/OrderStatusPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <CatalogPage /> },
      { path: 'product/:id', element: <ProductPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'order/:orderId', element: <OrderStatusPage /> },
    ],
  },
])
