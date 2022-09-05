import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { FilterProvider } from './context/filter_context';
import { ProductsProvider } from './context/products_context';
import { CartProvider } from './context/cart_context';

ReactDOM.render(
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App/>
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>,
    document.getElementById('root')
)
