export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Portal de Datasets</h1>
        <div className="space-x-4 text-sm">
          <a
            href="/"
            className="hover:underline hover:text-gray-200"
          >
            Inicio
          </a>
          <a
            href="/"
            className="hover:underline hover:text-gray-200"
          >
            Cerrar sesión
          </a>
        </div>
      </header>
      <main className="p-6 max-w-5xl mx-auto">{children}</main>
    </div>
  );
}
