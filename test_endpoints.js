const http = require('http');

async function runTests() {
  console.log('Iniciando pruebas de los endpoints...');

  // 1. Probar que las validaciones de express-validator funcionen (Faltan campos obligatorios)
  console.log('\n--- 1. Probando Validaciones (POST /api/media con body vacío) ---');
  try {
    const responsePost = await fetch('http://localhost:4000/api/media', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}) // Body intencionalmente vacío
    });
    const dataPost = await responsePost.json();
    console.log('Status de respuesta:', responsePost.status);
    console.log('Cuerpo de respuesta:', JSON.stringify(dataPost, null, 2));
    if (dataPost.errores) {
        console.log('✅ ¡Las validaciones funcionaron y atraparon los campos vacíos!');
    } else {
        console.log('❌ Las validaciones no se ejecutaron como se esperaba.');
    }
  } catch (error) {
    console.error('Error testeando POST:', error.message);
  }

  // 2. Probar la Paginación y Obtención de Medias (GET /api/media)
  console.log('\n--- 2. Probando Paginación (GET /api/media?limite=2&desde=0) ---');
  try {
    const responseGet = await fetch('http://localhost:4000/api/media?limite=2&desde=0');
    const dataGet = await responseGet.json();
    console.log('Status de respuesta:', responseGet.status);
    console.log('Medias retornadas (límite 2):', dataGet.medias ? dataGet.medias.length : 'N/A');
    console.log('Estructura de la respuesta:', Object.keys(dataGet));
    if (dataGet.medias) {
      console.log('✅ ¡La paginación y obtención de datos funcionó!');
      if(dataGet.medias.length > 0) {
         console.log('✅ Ejemplo de timestamps (createdAt):', dataGet.medias[0].createdAt);
      } else {
         console.log('⚠️ No hay medias creadas aún en la BD para ver los timestamps.');
      }
    }
  } catch (error) {
    console.error('Error testeando GET:', error.message);
  }
}

runTests();
