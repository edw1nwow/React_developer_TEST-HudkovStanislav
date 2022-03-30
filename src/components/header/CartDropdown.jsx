import React from "react";
import {NavLink} from "react-router-dom";


const CartDropdown = props => {
    const {cartArray, onCloseCart} = props


       let setPriceIndex = cartArray[0]?.el.product.prices.findIndex(el => el.currency.symbol === props.currentCurrency)

    let sum = 0;

    const arraySum = (array) => {
        for(let i = 0; i < array.length; i++){
            sum = Number(array[i]) + sum;

        }

    }
    arraySum(props.totalCount);




    return (
        <div className='overlay' onClick={onCloseCart}>
            <div className='drawer'>
                <h3>My Bag, <span>1 items</span></h3>
                <div className='drawer__items'>
                    {cartArray &&
                        <>
                            {cartArray.map(item => (
                                <div key={item.el.product.name} className='drawer__item'>
                                    <div className='item__leftSide'>
                                        <span>{item.el.product.name}</span>
                                        <label>{item.el.product.prices?.[setPriceIndex].currency.symbol}

                                            {item.el.product.prices?.[setPriceIndex].amount}</label>
                                        <div>
                                            <button>s</button>
                                            <button>m</button>
                                        </div>
                                    </div>
                                    <div className='item__center'>
                                        <button>+</button>
                                        <p>1</p>
                                        <button>-</button>
                                    </div>
                                    <div className='item__rightSide'><img src={item.el.product.gallery[0]} alt=""/>
                                    </div>
                                </div>
                            ))}
                        </>
                    }
                </div>
                <div className='drawer__lowerSide'>
                    <p>total: ${sum} </p>
                    <NavLink to={'cart'} >
                        <button className='drawer__viewBag'>VIEW BAG</button>
                    </NavLink>
                    <button className='drawer__CheckOut'>CHECK OUT</button>
                </div>

            </div>
        </div>
    )
}
export default CartDropdown