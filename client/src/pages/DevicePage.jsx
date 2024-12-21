import React from 'react'

export default function DevicePage() {
    const device = {
        id: 1,
        name: "9 max pro",
        price: 110000,
        rating: 1,
        img: "a65ce80f-2bb3-4442-b055-a9c9ae63634d.jpg",
        createdAt: "2024-12-21T05:39:17.523Z",
        updatedAt: "2024-12-21T05:39:17.523Z",
        typeId: 1,
        brandId: 6
    }

    const decription = [
        { id: 1, title: 'Оперативная память', description: '5 гб' },
        { id: 2, title: 'Камер', description: '12 мп' },
        { id: 3, title: 'Процессор', description: 'Пентиум 3' },
        { id: 4, title: 'Аккумулятор', description: '4000' },
    ]
    return (
        <div className='device-page-container'>
            <img src={device.img} />
            <div >
                <h2 className='device-name'>{device.name}</h2>
                <div className="rating">{device.rating}</div>
            </div>
            <div className="price-container">
                <h3 className="price">{device.price}</h3>
                <button className="btn-add-basket">Добавить в корзину</button>
            </div>
            <div className="description-device">
                <h1>Характеристики</h1>
                {decription.map((info) => {
                    return (
                        <div key={info.id}>{info.title}: {info.description}</div>
                    )
                })}
            </div>
        </div>
    )
}
