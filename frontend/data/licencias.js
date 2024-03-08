export async function obtenerLicencias() {
  const query = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/create`);
  const licencias = await query.json();
  return licencias;
}
