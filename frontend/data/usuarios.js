import axios from "axios";

export const registrarUsuario = async (datos) => {
  try {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/auth/register`,
      datos,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const iniciarSesion = async (datos) => {
  try {
    const data = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
      datos,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
