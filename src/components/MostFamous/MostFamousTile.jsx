import React from 'react';

const MostFamousTile = () => {
    const tiles = [
        {
            "defaultImage": "./assets/images/famous/famous-1.jpg",
            "hoverImage": "./assets/images/famous/famous-1-h.jpg",
            "alt": "famous-product-1",
            "brand": "TFG",
            "productName": "Formal Trouser",
            "price": "$199"
        },
        {
            "defaultImage": "./assets/images/famous/famous-2.jpg",
            "hoverImage": "./assets/images/famous/famous-2-h.jpg",
            "alt": "famous-product-2",
            "brand": "TFG",
            "productName": "Jacket",
            "price": "$299"
        },
        {
            "defaultImage": "./assets/images/famous/famous-3.jpg",
            "hoverImage": "./assets/images/famous/famous-3-h.jpg",
            "alt": "famous-product-3",
            "brand": "TFG",
            "productName": "Tops",
            "price": "$149"
        },
        {
            "defaultImage": "./assets/images/famous/famous-4.jpg",
            "hoverImage": "./assets/images/famous/famous-4-h.jpg",
            "alt": "famous-product-4",
            "brand": "TFG",
            "productName": "Knitted Top",
            "price": "$299"
        }
    ];

    return (
        <>
            {
                tiles.map((tile, index) => (
                    <div className='tile' key={index}>
                        <div className='product-image'>
                            <img className='defult-product-image' src={tile.defaultImage} alt={tile.alt} />
                            <img className='hover-product-image' src={tile.hoverImage} alt={tile.alt} />
                        </div>
                        <div className='product-info'>
                            <p className='brand-name text-s'>{tile.brand}</p>
                            <div className='product-detail'>
                                <p className='text-n'>{tile.productName}</p>
                                <p className='text-n'>{tile.price}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default MostFamousTile
