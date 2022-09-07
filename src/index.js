import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { FilterProvider } from './context/filter_context';
import { ProductsProvider } from './context/products_context';
import { CartProvider } from './context/cart_context';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/user_context';

ReactDOM.render(
    <Auth0Provider
        domain="dev-t52xyr20.eu.auth0.com"
        clientId="8WFeFHiBDku0AuNrvNG2t9NutRjEzn8K"
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App/>
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>,
    document.getElementById('root')
)
