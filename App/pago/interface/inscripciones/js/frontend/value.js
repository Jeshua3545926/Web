class opciones{
    constructor(){
        this.opciones = [];
    }
    async especialidad(){
        const especialidades = document.querySelectorAll('input[name="especialidad"]');
        // especialidades.forEach(especialidad => {
        //     especialidad.addEventListener('change', () => {
        //         const checked = document.querySelector('input[name="especialidad"]:checked');
        //         if (checked) {
        //             const value = checked.value;
        //             this.opciones.push(value);
        //         }
        //     });
        // });
    }
}