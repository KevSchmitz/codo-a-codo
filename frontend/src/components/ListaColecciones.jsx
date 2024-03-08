import Coleccion from "./Coleccion";

const ListaColecciones = ({ colecciones }) => {
  return (
    <section className="container mx-auto ">
      <ul>
        {colecciones?.map((coleccion) => (
          <Coleccion key={coleccion.id} coleccion={coleccion} />
        ))}
      </ul>
    </section>
  );
};

export default ListaColecciones;
