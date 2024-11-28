import React, { useEffect, useState } from 'react';
import ClientLayout from "@/layouts/ClientLayout";
import ProductCard from '@/components/ProductCard';

const MarketplacePage = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/products.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProducts(data))
            .catch(error => setError(error.message));
    }, []);

    return (
        <ClientLayout>
            <div>
                <p>Aquí encontrarás una variedad de productos disponibles para su compra.</p>
                {error ? (
                    <p className="text-red-500">Error: {error}</p>
                ) : (
                    <div className="flex flex-wrap">
                        {products.length === 0 ? (
                            <p>No hay productos disponibles en este momento.</p>
                        ) : (
                            products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        )}
                    </div>
                )}
            </div>
        </ClientLayout>
    );
};

export default MarketplacePage;
