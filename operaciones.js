const fs = require('fs')

const registrar = (nombre, edad, animal, color, enfermedad) => {
    console.log(`Se ha agendado correctamente la cita de ${nombre}.`)
    const verCitas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    verCitas.push({ Nombre: nombre, Edad: edad, Animal: animal, Color: color, Enfermedad: enfermedad })
    fs.writeFileSync('citas.json', JSON.stringify(verCitas))
}

const leer = () => {

    const verCitas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    verCitas.forEach((cita, i) => {
        console.log(
            `\x1b[4mCita N° ${i + 1}\x1b[0m\n`,
            `Nombre del Animal: ${cita.Nombre}\n`,
            `Edad del Animal: ${cita.Edad}\n`,
            `Tipo de Animal: ${cita.Animal}\n`,
            `Color del Animal: ${cita.Color}\n`,
            `Enfermedad: ${cita.Enfermedad}\n`
        )
    });

    /* console.log(verCitas) */
}

module.exports = { registrar, leer };