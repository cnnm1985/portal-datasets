import Layout from '../components/Layout';

export default function DatasetView() {
  return (
    <Layout>
 

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Nombre del Dataset</h2>
        <p className="mb-4">Descripción del dataset y detalles generales.</p>
        <div className="overflow-auto mb-6">
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Columna 1</th>
                <th className="p-2 border">Columna 2</th>
                <th className="p-2 border">Columna 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Dato 1</td>
                <td className="border p-2">Dato 2</td>
                <td className="border p-2">Dato 3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-semibold mb-2">Comentarios</h3>
        <div className="space-y-2">
          <div className="bg-gray-100 p-2 rounded">Usuario1: Buen dataset</div>
          <div className="bg-gray-100 p-2 rounded">Usuario2: Me ayudó en mi investigación</div>
        </div>
      </div>
    </Layout>
  );
}
