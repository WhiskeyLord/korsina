import React from 'react'
import { GoodsItem} from "./GoodsItem";

function GoodsList(props) {
    const {goods = [] } = props;

    if (!goods.length) {
        return <h3>Ничего нет!</h3>
    }

    return(
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.offerId} {...item}/>
            ))}
        </div>
    );
}

export {GoodsList};