import React from 'react'
import Header from './header/Header'
import {Route, Routes} from 'react-router-dom'
import AllCategory from './wrapper/category/AllCategory'
import Clothes from './wrapper/category/Clothes'
import Tech from './wrapper/category/Tech'
import Pdp from './wrapper/pdp/Pdp'
import CartDropdown from "./header/CartDropdown";
import Cart from "./wrapper/cart/Cart";

function App() {
    const [cartOpen, setCartOpen] = React.useState(false)
    const [cartItem, setCartItem] = React.useState([])
    const [currentCurrency, setCurrentCurrency] = React.useState('$')
    const [count, setCount] = React.useState([])

    const onAddToCart = (el) => {
        setCartItem(prev=>[...prev, {el}])
    }
    const addToTotal = (el) => {
        setCount(prev=>[...prev, [el]])
    }

    return (
        <div className='App'>
            {cartOpen ? <CartDropdown  currentCurrency={currentCurrency} cartArray={cartItem} onCloseCart={() => setCartOpen(false)} totalCount={count}/> : null}
            <Header onChangeCurrency={(el)=>setCurrentCurrency(el)} onOpenCart={() => setCartOpen(true)} />
            <Routes>
                <Route path='all' element={<AllCategory title='All' currentCurrency={currentCurrency}/>}/>
                <Route path='clothes' element={<Clothes title='Clothes' currentCurrency={currentCurrency}/>}/>
                <Route path='tech' element={<Tech title='Tech' currentCurrency={currentCurrency}/>}/>
                <Route path='Pdp/:id'  element={<Pdp addInCart={(el)=>onAddToCart(el)} addToTotal={(el)=>addToTotal(el)} currentCurrency={currentCurrency}/>}/>
                <Route path='cart' element={<Cart cartArray={cartItem} currentCurrency={currentCurrency}/>}/>
            </Routes>
        </div>
    )
}

export default App
