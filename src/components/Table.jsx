
export const Table = () => {

  const lojas = [
    { nome: 'MozTech', produtos: 120, categorias: 'Eletrônicos, Móveis' },
    { nome: 'Loja das Damas', produtos: 75, categorias: 'Roupas, Acessórios' },
    { nome: 'Moz Academic', produtos: 200, categorias: 'Livros, Papelaria' },
    { nome: 'Shoprit', produtos: 50, categorias: 'Alimentos, Bebidas' },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Lojas</h2>
      <table className="w-full text-left table-auto">
        <thead>
          <tr className="bg-[#D8F0FD]">
            <th className="px-4 py-2">Nome da Loja</th>
            <th className="px-4 py-2">Número de Produtos</th>
            <th className="px-4 py-2">Categorias</th>
          </tr>
        </thead>
        <tbody>
          {lojas.map((loja, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className="px-4 py-2">{loja.nome}</td>
              <td className="px-4 py-2">{loja.produtos}</td>
              <td className="px-4 py-2">{loja.categorias}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
