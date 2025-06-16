import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Simular creación de cuenta
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Registrarse</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input type="text" placeholder="Nombre completo" className="w-full border p-2 rounded" required />
        <input type="email" placeholder="Correo" className="w-full border p-2 rounded" required />
        <input type="password" placeholder="Contraseña" className="w-full border p-2 rounded" required />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
          Ingresar
        </button>
      </form>
    </div>
  );
}
