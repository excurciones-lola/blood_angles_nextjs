export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center text-white">
      <header className="w-full max-w-5xl py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Excursiones Lola</h1>
      </header>

      <main className="flex flex-col items-center mt-16 text-center">
        <h2 className="text-5xl font-bold leading-tight">
          ¡Tu Próxima Aventura Comienza Aquí!
        </h2>
        <p className="text-lg mt-4 max-w-xl">
          Únete a nuestros viajes exclusivos por México con transporte, comida y
          atracciones todo incluido.
        </p>
      </main>

      <section className="mt-20 max-w-4xl text-center">
        <h3 className="text-3xl font-bold">¿Por qué Elegirnos?</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h4 className="font-bold text-xl">Todo Incluido</h4>
            <p className="mt-2">
              Transporte, comida y atracciones en un solo paquete.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h4 className="font-bold text-xl">Destinos Exclusivos</h4>
            <p className="mt-2">Exploramos los mejores lugares de México.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h4 className="font-bold text-xl">Fácil Reserva</h4>
            <p className="mt-2">Próximamente disponible en nuestra app.</p>
          </div>
        </div>
      </section>

      <footer className="mt-20 py-6 text-center text-sm">
        <p className="font-semibold">
          &quot;No soy la única, pero sí la mejor&quot;
        </p>
        <p>&copy; 2024 Excursiones Lola. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
