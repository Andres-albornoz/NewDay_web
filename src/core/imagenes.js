// Las imagenes de los programas viven en public/imagenes.
// Se resuelven contra la base configurada en Vite para que funcionen
// tanto en desarrollo como en el despliegue bajo subruta.
export function imagen(nombre) {
  return `${import.meta.env.BASE_URL}imagenes/${nombre}`;
}
