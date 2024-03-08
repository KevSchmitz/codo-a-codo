import { useEffect, useState } from "react";

const FormCrearObjeto = ({ producto, propiedades }) => {
  const [licencias, setLicencias] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    setLicencias(propiedades.licencias);
    setCategorias(propiedades.categorias);
  }, []);

  return (
    <div className="text-xl flex flex-col gap-6 mt-10 max-w-3xl mx-auto">
      <div className=" flex flex-col md:flex-row gap-6">
        <div className="flex gap-3 md:basis-1/2 items-center">
          <label htmlFor="categoriaId">Categoría: </label>
          <select
            className="w-full border-2 px-3 py-1 rounded-xl"
            name="categoriaId"
            id="categoriaId"
          >
            <option value="">Seleccionar</option>
            {categorias.map((categoria) => (
              <option
                key={categoria.id}
                className="capitalize"
                value={categoria.id}
              >
                {categoria.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 md:basis-1/2 items-center">
          <label htmlFor="licenciaId">Licencia: </label>
          <select
            className="w-full border-2 px-3 py-1 rounded-xl capitalize"
            name="licenciaId"
            id="licenciaId"
          >
            <option value="">Seleccionar</option>
            {licencias.map((licencia) => (
              <option
                key={licencia.id}
                className="capitalize"
                value={licencia.id}
              >
                {licencia.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <label htmlFor="nombre">Nombre del producto:</label>
        <input
          className="w-full md:basis-2/3 text-center border-b-2 border-b-red-500"
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Kakashi Hatake Shippuden Saga"
          defaultValue={producto?.nombre}
        />
      </div>
      <textarea
        className="w-full border-2 px-3 py-1 rounded-xl"
        id="descripcion"
        name="descripcion"
        cols="30"
        rows="10"
        placeholder="Descripción del producto"
        defaultValue={producto?.descripcion}
      ></textarea>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex gap-3 items-center">
          <label htmlFor="sku">SKU:</label>
          <input
            className="text-center border-b-2 border-b-red-500"
            type="text"
            id="sku"
            name="sku"
            placeholder="SSK111AB001"
            defaultValue={producto?.sku}
          />
        </div>

        <div className="flex gap-3 items-center">
          <label htmlFor="precio">Precio:</label>
          <input
            className="text-center border-b-2 border-b-red-500"
            type="text"
            id="precio"
            name="precio"
            placeholder="$ 0.000,00"
            defaultValue={producto?.precio}
          />
        </div>

        <div className="flex gap-3 items-center">
          <label htmlFor="stock">Stock:</label>
          <input
            className="w-full text-center border-b-2 border-b-red-500"
            type="number"
            id="stock"
            name="stock"
            placeholder="0"
            defaultValue={producto?.stock}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:items-center">
        <div className="flex gap-3 items-center">
          <label htmlFor="descuento">Descuento:</label>
          <input
            className="text-center border-b-2 border-b-red-500"
            type="text"
            id="descuento"
            name="descuento"
            placeholder="0%"
            defaultValue={producto?.descuento}
          />
        </div>
        <div className="flex gap-3 items-center">
          <label htmlFor="cuotas">Cuotas:</label>
          <select
            className="border-2 px-3 py-1 rounded-xl"
            name="cuotas"
            id="cuotas"
          >
            <option value="3">3 cuotas sin interes</option>
            <option value="6">6 cuotas sin interes</option>
            <option value="12">12 cuotas sin interes</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label>Imágenes:</label>

        <label htmlFor="">Cara de la imagen:</label>
        <input type="file" name="imagenCara" accept="image/*" />

        <label htmlFor="">Dorso de la imagen: </label>
        <input type="file" name="imagenDorso" accept="image/*" />
      </div>
    </div>
  );
};

export default FormCrearObjeto;
