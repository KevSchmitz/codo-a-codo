import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Index, { loader as coleccionesLoader } from "./pages/Index.jsx";
import Shop, { loader as productosLoader } from "./pages/Shop.jsx";
import Login, { action as loginAction } from "./pages/Login.jsx";
import CarritoCompras from "./pages/CarritoCompras.jsx";
import CrearObjeto, {
  action as crearObjetoAction,
  loader as crearObjetoLoader,
} from "./pages/CrearObjeto.jsx";
import ProductoDetail, {
  loader as productoDetailLoader,
  action as productoDetailAction,
} from "./pages/ProductoDetail.jsx";
import Admin, { loader as productoAdminLoader } from "./pages/Admin.jsx";
import AdminEdit, {
  loader as adminEditLoader,
  action as adminEditAction,
} from "./pages/AdminEdit.jsx";
import Registro, { action as registroAction } from "./pages/Registro.jsx";
import EliminarObjeto, {
  action as eliminarObjetoAction,
} from "./pages/EliminarObjeto.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: coleccionesLoader,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: productosLoader,
      },
      { path: "shop/cart", element: <CarritoCompras /> },
      {
        path: "shop/item/:id",
        element: <ProductoDetail />,
        action: productoDetailAction,
        loader: productoDetailLoader,
      },
      { path: "auth/login", element: <Login />, action: loginAction },
      { path: "auth/register", element: <Registro />, action: registroAction },

      { path: "admin", element: <Admin />, loader: productoAdminLoader },
      {
        path: "admin/create",
        element: <CrearObjeto />,
        action: crearObjetoAction,
        loader: crearObjetoLoader,
      },
      {
        path: "admin/edit/:id",
        element: <AdminEdit />,
        loader: adminEditLoader,
        action: adminEditAction,
      },
      {
        path: "/admin/delete/:id",
        element: <EliminarObjeto />,
        action: eliminarObjetoAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
