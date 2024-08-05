import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className="min-w-screen min-h-screen bg-slate-100 flex justify-center items-center">
            <div className="text-center p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Página Não Encontrada</h1>
                <p className="text-2xl text-gray-600 mb-6">404</p>
                <Link to="/" className="inline-block">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Página Inicial
                    </button>
                </Link>
            </div>
        </div>
    );
};
