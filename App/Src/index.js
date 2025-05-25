// const emmaButton = document.querySelector('.emma-button');
// const dialog = document.getElementById('emma-dialog');
// const closeDialogButton = document.getElementById('close-dialog');



// emmaButton.addEventListener('click', () => {
// dialog.showModal();
// });

// closeDialogButton.addEventListener('click', () => {
// dialog.close();
// });
const astro = document.getElementById('ASTRO');
astro.addEventListener('click', () => {
    // Verificar si el archivo existe primero
    fetch('/AppProgramming Setup 1.0.0.exe')
        .then(response => {
            if (!response.ok) {
                throw new Error('Archivo no encontrado');
            }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'AppProgramming_Setup_1.0.0.exe'; // Nombre sin espacios
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);
        })
        .catch(error => {
            alert('Error al descargar:', error);
            alert('No se pudo descargar el archivo. Por favor verifica la ruta.');
        });
});

/*                <button class="cta-button primary">
                    <span>Descargar Astro Desktop</span>
                    <i class="fas fa-arrow-right"></i>
                    </button> 
*/