import Layout from '../components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="space-y-2">
        <a
          href="/upload"
          className="block bg-blue-100 p-2 rounded hover:bg-blue-200 transition"
        >
          Subir nuevo Dataset
        </a>
        <a
          href="/dataset/1"
          className="block bg-green-100 p-2 rounded hover:bg-green-200 transition"
        >
          Buscar o Ver Dataset
        </a>
        <a
          href="/admin"
          className="block bg-yellow-100 p-2 rounded hover:bg-yellow-200 transition"
        >
          Panel de Administración (solo admin)
        </a>
      </div>
    </Layout>
  );
}
