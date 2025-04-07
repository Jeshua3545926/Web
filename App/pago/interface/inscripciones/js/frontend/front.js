//  document.addEventListener("DOMContentLoaded", async function() {
       
//      const mp = new MercadoPago('TEST-3b08c9fc-149f-433a-a8cf-c28358110264', { locale: 'es-AR' });

//      try {
//           //Hacer solicitud al backend para obtener el ID de la preferencia
//          const response = await fetch('http:localhost:3000/create_preference', { method: 'POST' });
//          const data = await response.json();
//          console.log('Preference ID recibido:', data.preferenceId);
        
//          if (data.preferenceId) {
//              mp.checkout({
//                  preference: { id: data.preferenceId },
//                  render: {
//                      container: '#wallet-container',
//                      label: 'Pagar con Mercado Pago',
//                  }
//              });
//          } else {
//              console.error('No se recibió un ID de preferencia válido.');
//          }
//      } catch (error) {
//          console.error('Error al obtener la preferencia:', error);
//      }
//  });

//  const schoolInputs = document.querySelectorAll('input[name="school"]');
//  const array = [45000, 35000, 32000, 28000];
//  schoolInputs.forEach((input, index) => {

//      input.value = array[index];
//      input.addEventListener('change', () => {
//          const checked = document.querySelector('input[name="school"]:checked');
//          const totalPrice = document.getElementById('total-price');
//          const basePrice = document.getElementById('base-price');
//           const select = document.getElementById('select-especialidad');
//          //logica para el select
        
//          if (checked) {
//              const price = checked.value;
//              totalPrice.textContent = `$${price} MXN`;
//              basePrice.textContent = `$${price} MXN`;
//          }
//      });
//  });

//  async function createPreference() {
//      const response = await fetch('https:api.mercadopago.com/checkout/preferences', {
//          method: 'POST',
//          headers: {
//              'Authorization': `Bearer ${this.ACCESS_TOKEN}`,
//              'Content-Type': 'application/json'
//          },
//          body: JSON.stringify({
//              items: [{
//                  title: 'Inscripción Escolar',
//                  quantity: 1,
//                  currency_id: 'MXN',
//                  unit_price: 2500
//              }]
//          })
//      });

//      const data = await response.json();
//      console.log('Respuesta de Mercado Pago:', data);  //Verifica la respuesta
//      return data;
//  }

//  function handleResponse(res, data) {
//      res.writeHead(200, { 'Content-Type': 'application/json' });
//      res.end(JSON.stringify({ preferenceId: data.id }));
//  }
