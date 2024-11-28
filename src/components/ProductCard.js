import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-2">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-2">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-700">{product.description}</p>
                <p className="text-blue-600 font-bold">{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
