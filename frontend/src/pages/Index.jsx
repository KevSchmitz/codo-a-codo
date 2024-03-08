import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import ListaColecciones from "../components/ListaColecciones";
import { obtenerColecciones } from "../../data/productos";

export function loader() {
  const colecciones = obtenerColecciones();
  return colecciones;
}

const Index = () => {
  const colecciones = useLoaderData();
  console.log(colecciones);
  return (
    <main>
      <Banner />
      <ListaColecciones colecciones={colecciones} />
    </main>
  );
};

export default Index;
