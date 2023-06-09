import style from "./Products.module.css"
import { useParams } from "react-router"
import { format } from "../Basket/Basket"
import { useEffect, useState } from "react"

const Item = ({setBasket, basket}) => {
    const [item, setServicesItem] = useState([])

    const params = useParams()
    const id = params.id

    const fetchServices = async () => {
        const response = await fetch(`https://flowers.avavion.ru/api/products/${id}`)
        const data = await response.json()

        setServicesItem(data.data)
    }

    console.log(item)

    useEffect(() => {
        fetchServices()
    }, [])

    const handleSetBasket = ({id, name, preview_image, text, price}) => {
        setBasket(prev => [...prev, {id: id, name:name, preview_image:preview_image, text:text, price: item.discount === 0 ? price : price * (item.discount/100)}])
    }

    const idBasket = basket.find(item => item.id == id)


    return (
        <div className={style.item}>
            <div className={style.img_item_one}>
                <img src={item.preview_image} alt="" />
            </div>
            <div className={style.content_item}>
                <h1>{item.name}</h1>
                <p>{item.text}</p>
                <h2>
                     {
                        item.discount === 0 ?  format(item.price) :
                        format(item.price * (item.discount/100))
                     } 
                     ₽
                </h2>
                {
                     idBasket ? <p>Товар в корзине</p> : (
                        <button onClick={() => handleSetBasket({...item})}>Добавить в корзину</button>
                     )
                }
            </div>
        </div>
    )
}

export default Item