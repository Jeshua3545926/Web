

document.addEventListener("DOMContentLoaded", async function () {
    if(typeof MercadoPago == 'undefined'){
        console.log('El SDK de MercadoPago no se ha cargado correctamente.');
        return;
    }
    const mp = new MercadoPago('TEST-3b08c9fc-149f-433a-a8cf-c28358110264', { locale: 'es-MX' });
    try {
        // Hacer solicitud al backend para obtener el ID de la preferencia
        const response = await fetch('http://192.168.100.7:4000/create_preference', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();
        console.log('Preference ID recibido:', data.preferenceId);

        if (data.preferenceId) {
            const botonPago = document.querySelector('.Pago');
            botonPago.addEventListener('click', function () {
                window.location.href = `https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=${data.preferenceId}`;
            })
        } else {
            console.error('No se recibió un ID de preferencia válido.');
        }
    } catch (error) {
        console.error('Error al obtener la preferencia:', error);
    }

    // Manejo de inputs de precios
    const schoolInputs = document.querySelectorAll('input[name="school"]');
    const array = [45000, 35000, 32000, 28000];
    const totalPrice = document.getElementById('total-price');
    const basePrice = document.getElementById('base-price');

    schoolInputs.forEach((input, index) => {
        input.value = array[index];
        input.addEventListener('change', () => {
            const checked = document.querySelector('input[name="school"]:checked');
            if (checked) {
                const price = checked.value;
                totalPrice.textContent = `$${price} MXN`;
                basePrice.textContent = `$${price} MXN`;
            }
        });
    });
});
