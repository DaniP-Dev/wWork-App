import React, { useEffect, useState } from 'react';
import ClientLayout from "@/layouts/ClientLayout";
import ProductCard from '@/components/ProductCard';

const MarketplacePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/data/products.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProducts(data))
            .catch(error => console.error('Error al cargar los productos:', error));
    }, []);

    return (
        <ClientLayout>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </ClientLayout>
    );
};

export default MarketplacePage;
