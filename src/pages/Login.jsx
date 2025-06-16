import Layout from '../components/Layout';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes validar email/contraseña más adelante
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" placeholder="Correo" className="w-full border p-2 rounded" required />
        <input type="password" placeholder="Contraseña" className="w-full border p-2 rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Ingresar
        </button>
      </form>
    </div>
  );
}
