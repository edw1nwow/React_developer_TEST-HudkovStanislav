import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {GET_ITEM} from "../../../query/category";
import {useCount} from '../../../helper/helper'

const Pdp = props => {
    const {id} = useParams()
    const {loading, error, data} = useQuery(GET_ITEM, {
        variables: {id},
    });
    if (loading) return null;
    if (error) return `Error! ${error}`;

    let setPrice = data.product.prices.find(el => el.currency.symbol === props.currentCurrency)

    const onClickAdd = () => {
        props.addInCart(data)
        props.addToTotal(setPrice.amount)
    }




    return (
        <div className='pdp__wrapper'>
            <div className='pdp__lowImg'>
                {data.product.gallery.map(el => (
                    <img key={el} src={el} alt=''/>
                ))}
            </div>
            <div className='pdp__MainImg'>
                <img src={data.product.gallery[0]}/>
            </div>
            <div className='pdp__sideBlock'>
                <h3>{data.product.name}</h3>
                {!!data.product.attributes?.[0] &&
                    <>
                        <p className='sideBlock__name'>{data.product.attributes[0].name}:</p>
                        <div>
                            <form className='sideBlock__form' name="" id="">
                                {
                                    data.product.attributes?.[0]?.items.map(el => (
                                        <input style={{background: el.value, color: el.value}} type='button' id={el.id}
                                               key={el.value} value={el.value}/>
                                    ))
                                }
                            </form>
                        </div>
                    </>
                }

                <p className='sideBlock__price'>price:</p>
                <div
                    className='sideBlock__amount'><span>{ setPrice.currency.symbol }
                    {setPrice.amount}
                </span>
                </div>
                <button onClick={onClickAdd} className='sideBlock__cartButton'>ADD TO CART</button>
                <div className='sideBlock__description' dangerouslySetInnerHTML={{__html: data.product.description}}/>

            </div>
        </div>
    )
}


export default Pdp
