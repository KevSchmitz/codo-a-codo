const FomRegistro = () => {
  return (
    <div className="flex flex-col gap-5 text-xl justify-center w-[90vw] md:w-[550px]">
      <div className="flex justify-between gap-4 flex-col md:flex-row">
        <label htmlFor="nombre">Nombre</label>
        <input
          className="w-full md:basis-2/3 text-center border-b-2 border-b-red-500"
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
        />
      </div>
      <div className="flex justify-between gap-4 flex-col md:flex-row">
        <label htmlFor="apellido">Apellido</label>
        <input
          className="w-full md:basis-2/3 text-center border-b-2 border-b-red-500"
          type="text"
          id="apellido"
          name="apellido"
          placeholder="Apellido"
        />
      </div>
      <div className="flex justify-between gap-4 flex-col md:flex-row">
        <label htmlFor="email">Email</label>
        <input
          className="w-full md:basis-2/3 text-center border-b-2 border-b-red-500"
          type="email"
          id="email"
          name="email"
          placeholder="ejemplo@email.com"
        />
      </div>
      <div className="flex justify-between gap-4 flex-col md:flex-row">
        <label htmlFor="username">Username</label>
        <input
          className="w-full md:basis-2/3 text-center border-b-2 border-b-red-500"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        />
      </div>
      <div className="flex justify-between gap-4 flex-col md:flex-row">
        <label htmlFor="contrasena">Contraseña</label>
        <input
          className="w-full md:basis-2/3 text-center border-b-2 border-b-red-500"
          type="password"
          id="contrasena"
          name="contrasena"
          placeholder="&#11044; &#11044; &#11044; &#11044; &#11044; &#11044; &#11044; &#11044; "
        />
      </div>
      <div className="flex justify-between gap-4 flex-col md:flex-row">
        <label htmlFor="repetir_contrasena">Repetir contraseña</label>
        <input
          className="w-full md:basis-2/3 text-center border-b-2 border-b-red-500"
          type="password"
          id="repetir_contrasena"
          name="repetir_contrasena"
          placeholder="&#11044; &#11044; &#11044; &#11044; &#11044; &#11044; &#11044; &#11044; "
        />
      </div>
    </div>
  );
};

export default FomRegistro;
