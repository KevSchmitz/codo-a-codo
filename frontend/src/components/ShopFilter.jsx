import { useEffect, useState } from "react";

const ShopFilter = ({ productos, handleFilter }) => {
  const [datos, setDatos] = useState({
    buscar: "",
    ordenar: "",
    precioMin: "",
    precioMax: "",
  });

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const filtrar = () => {
      let productosActualizados = [...productos];
      if (datos.buscar) {
        productosActualizados = productos.filter(
          (producto) =>
            Object.values(producto)
              .map((valor) =>
                valor
                  .toString()
                  .toLowerCase()
                  .includes(datos.buscar.toLowerCase())
              )
              .includes(true) && producto
        );
      }
      handleFilter(productosActualizados);
    };
    filtrar();
  }, [datos]);

  return (
    <form className="basis-1/6 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="uppercase text-xl font-bold" htmlFor="buscar">
          Buscar:
        </label>
        <input
          onChange={handleChange}
          className="border border-black px-3 py-1 rounded"
          id="buscar"
          name="buscar"
          type="text"
          value={datos.buscar}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="uppercase text-xl font-bold" htmlFor="sort">
          Ordenar por:
        </label>
        <select
          onChange={handleChange}
          className="border border-black px-3 py-1 rounded"
          id="ordenar"
          name="ordenar"
          value={datos.ordenar}
        >
          <option defaultValue="">--Seleccione--</option>
          <option value="mayor-a-menor">Mayor a menor precio</option>
          <option value="reciente">Reciente</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <p>Precio</p>
        <div className="flex gap-2">
          <div className="flex gap-2 items-center">
            <label htmlFor="min">Min</label>
            <input
              onChange={handleChange}
              className="w-14 border border-black px-3 py-1 rounded-xl"
              id="precioMin"
              name="precioMin"
              type="number"
              placeholder="0"
              min={0}
              value={datos.precioMin}
            />
          </div>
          <p>-</p>
          <div className="flex gap-2 items-center">
            <label htmlFor="max">Max</label>
            <input
              onChange={handleChange}
              className="w-14 border border-black px-3 py-1 rounded-xl"
              id="precioMax"
              name="precioMax"
              type="number"
              placeholder="0"
              min={0}
              value={datos.precioMax}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ShopFilter;
