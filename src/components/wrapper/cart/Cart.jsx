import React from "react";


const Cart = props => {

    const {cartArray} = props
    let setPriceIndex = cartArray[0]?.el.product.prices.findIndex(el => el.currency.symbol === props.currentCurrency)

    return (
        <div>
            <div className='cart'>
                <h3>CART</h3>
                <div className='cart__items'>
                    {cartArray &&
                        < >
                            {cartArray.map(item => (
                                <div key={item.el.product.name} className='cart__item'>
                                    <div className='item__leftSide'>
                                        <span>{item.el.product.name}</span>
                                        <label>{item.el.product.prices?.[setPriceIndex].currency.symbol}{item.el.product.prices?.[setPriceIndex].amount}</label>
                                        <form id={item.el.product.name}>
                                            <input type='button' value='s'/>
                                            <input type='button' value='m'/>
                                        </form>
                                    </div>
                                    <div className='item__rightSide'>
                                        <div className='item__counter'>
                                            <button>+</button>
                                            <p>1</p>
                                            <button>-</button>
                                        </div>
                                        <div><img src={item.el.product.gallery[0]} alt=""/></div>
                                    </div>

                                </div>
                            ))}
                        </>
                    }
                </div>

            </div>
        </div>
    )
}
export default Cart