import axios from "axios";

export async function obtenerColecciones() {
  const query = await fetch(`${import.meta.env.VITE_BACKEND_URL}`);
  const colecciones = await query.json();
  return colecciones;
}

export async function obtenerProductos() {
  const query = await fetch(`${import.meta.env.VITE_BACKEND_URL}/shop`);
  const productos = await query.json();
  return productos;
}

export async function obtenerProductoDetail(id) {
  const query = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/shop/item/${id}`
  );
  const producto = await query.json();
  return producto;
}

export async function crearNuevoObjeto(datos) {
  try {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/admin/create`,
      datos,
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function obtenerProductosAdminFront() {
  const query = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin`);
  const productos = await query.json();
  return productos;
}

export async function obtenerProductoAdminEdit(id) {
  const query = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/admin/edit/${id}`
  );
  const producto = query.json();
  return producto;
}

export async function actualizarDatosProducto(id, datos) {
  try {
    const query = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/admin/edit/${id}`,
      datos,
      {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function obtenerPropiedades() {
  const query = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/create`);
  const propiedades = await query.json();
  return propiedades;
}

export async function eliminarCliente(id) {
  try {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/delete/${id}`, {
      method: "DELETE", // Es el método para eliminar
    });

    // await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function agregarACarrito(id, cantidad) {
  try {
    if (Number(cantidad) !== 0) {
      const query = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/shop/item/${id}`
      );
      const producto = query.data;

      const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];

      if (carritoLS.some((producto) => producto.id === Number(id))) {
        const carritoActualizado = carritoLS.map((producto) =>
          producto.id === Number(id)
            ? {
                ...producto,
                cantidad: Number(cantidad),
              }
            : producto
        );
        const carritoActualizadoJSON = JSON.stringify(carritoActualizado);
        localStorage.setItem("carrito", carritoActualizadoJSON);
      } else {
        const carritoJSON = JSON.stringify([
          ...carritoLS,
          {
            ...producto,
            cantidad: Number(cantidad),
          },
        ]);
        localStorage.setItem("carrito", carritoJSON);
      }

      console.log({ msg: "Se agregó el producto al carrito" });
    } else {
      console.log({ msg: "Ingrese una cantidad" });
    }
  } catch (error) {
    console.log(error);
  }
}
