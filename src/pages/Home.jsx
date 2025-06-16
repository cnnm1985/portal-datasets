import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Bienvenido al Portal de Datasets</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl">
          Explora, comparte y comenta conjuntos de datos académicos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a
    href="/login"
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow text-center"
  >
    Iniciar Sesión
  </a>
  <a
    href="/register"
    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded shadow text-center"
  >
    Registrarse
  </a>
</div>

      </div>
    </Layout>
  );
}