import Layout from '../components/Layout';

export default function AdminPanel() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Panel de Administración</h2>
      <p>Aquí el administrador puede gestionar usuarios, datasets y moderar comentarios.</p>
    </Layout>
  );
}