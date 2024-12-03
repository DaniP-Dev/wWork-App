import AddProduct from '@/components/AddProduct';
import AdminLayout from '@/layouts/AdminLayout';
import React from 'react';

const AgregarP = () => {
    return (
        <>
            <AdminLayout>
                <div className='flex justify-center'>
                    <AddProduct />

                </div>

            </AdminLayout>
        </>
    );
};

export default AgregarP;