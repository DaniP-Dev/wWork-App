import React from 'react';

const Sidebar = ({ isOpen }) => {
    console.log(isOpen);
    return (
        <div className={`sidebar bg-blue-600 text-white w-64 fixed h-full z-30 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <nav className="p-4">
                <ul>
                    <li className="mb-4"><a className="hover:underline" href="#">Inicio</a></li>
                    <li className="mb-4"><a className="hover:underline" href="#">Perfil</a></li>
                    <li className="mb-4"><a className="hover:underline" href="#">Configuración</a></li>
                    <li className="mb-4"><a className="hover:underline" href="#">Ayuda</a></li>
                    <li className="mb-4"><a className="hover:underline" href="#">Productos</a></li>
                    <li className="mb-4"><a className="hover:underline" href="#">Pedidos</a></li>
                    <li className="mb-4"><a className="hover:underline" href="#">Clientes</a></li>
                    <li className="mb-4"><a className="hover:underline" href="#">Reportes</a></li>
                    <li className="mb-4"><a className="hover:underline" href="#">Promociones</a></li>
                    <li className="mb-4"><a className="hover:underline" href="#">Métricas</a></li>
                    <li className="mb-4"><a className="hover:underline" href="#">Mensajes</a></li>
                    <li className="mb-4"><a className="hover:underline" href="#">Recomendaciones</a></li>
                    <li className="mb-4"><a className="hover:underline" href="#">Facturación</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
