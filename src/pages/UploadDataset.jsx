import Layout from '../components/Layout';

export default function UploadDataset() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-4 p-6 border rounded shadow bg-white">
        <h2 className="text-xl font-bold mb-4">Subir Dataset</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Título del dataset"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Descripción"
            className="w-full p-2 border rounded"
          ></textarea>
          <input type="file" className="w-full" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Cargar
          </button>
        </form>
      </div>
    </Layout>
  );
}
