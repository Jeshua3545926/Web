/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                              getModuleData                               ║
 * ║                                                                          ║
 * ║ Crea un objeto de datos de módulo con propiedades para almacenar         ║
 * ║ información sobre nombres, especialidades, grados y grupos. Proporciona ║
 * ║ métodos para agregar nuevas entradas a cada propiedad.                   ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 *
 * @function getModuleData
 * @returns {Object} Un objeto que contiene las siguientes propiedades y métodos:
 * 
 * @property {Array<string>} name - Un arreglo para almacenar nombres.
 * @property {Array<string>} especialidad - Un arreglo para almacenar especialidades.
 * @property {Array<string>} grado - Un arreglo para almacenar grados.
 * @property {Array<string>} grupo - Un arreglo para almacenar grupos.
 * 
 * @property {Function} addName - Agrega un nuevo nombre al arreglo `name`.
 * @param {string} newName - El nombre que se va a agregar.
 * 
 * @property {Function} addEspecialidad - Agrega una nueva especialidad al arreglo `especialidad`.
 * @param {string} newEspecialidad - La especialidad que se va a agregar.
 * 
 * @property {Function} addGrado - Agrega un nuevo grado al arreglo `grado`.
 * @param {string} newGrado - El grado que se va a agregar.
 * 
 * @property {Function} addGrupo - Agrega un nuevo grupo al arreglo `grupo`.
 * @param {string} newGrupo - El grupo que se va a agregar.
 * 
 * @example
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║ Ejemplo de uso:                                                          ║
 * ║                                                                          ║
 * ║ const moduleData = getModuleData();                                      ║
 * ║                                                                          ║
 * ║ // Agregando datos al módulo                                             ║
 * ║ moduleData.addName('Juan Pérez');                                        ║
 * ║ moduleData.addEspecialidad('Matemáticas');                               ║
 * ║ moduleData.addGrado('10° Grado');                                        ║
 * ║ moduleData.addGrupo('Grupo A');                                          ║
 * ║                                                                          ║
 * ║ // Accediendo a los datos almacenados                                    ║
 * ║ console.log(moduleData.name); // ['Juan Pérez']                          ║
 * ║ console.log(moduleData.especialidad); // ['Matemáticas']                 ║
 * ║ console.log(moduleData.grado); // ['10° Grado']                          ║
 * ║ console.log(moduleData.grupo); // ['Grupo A']                            ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 * 
 * @description
 * Esta función es útil para gestionar datos modulares en una aplicación.
 * Proporciona una forma estructurada de almacenar y recuperar información sobre
 * nombres, especialidades, grados y grupos. El objeto devuelto asegura
 * encapsulación y permite una fácil manipulación de datos a través de sus métodos.
 */
function getModuleData() {
    const name = [];
    const especialidad = [];
    const grado = [];
    const grupo = [];

    return {
        name,
        especialidad,
        grado,
        grupo,
        addName(newName) {
            name.push(newName);
        },
        addEspecialidad(newEspecialidad) {
            especialidad.push(newEspecialidad);
        },
        addGrado(newGrado) {
            grado.push(newGrado);
        },
        addGrupo(newGrupo) {
            grupo.push(newGrupo);
        },
    };
}

export default getModuleData;