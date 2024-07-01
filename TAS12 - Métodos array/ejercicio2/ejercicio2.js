"use strict";

let subjects = [
    {
        subject: "MATEMATICA COMPUTACIONAL",
        curricularOrganization: "BASICA",
        credits: 3,
        level: 1
    },
    {
        subject: "METODOLOGÍAS PARA RESOLVER PROBLEMAS INFORMÁTICOS",
        curricularOrganization: "BASICA",
        credits: 3,
        level: 1
    },
    {
        subject: "BASE DE DATOS RELACIONALES",
        curricularOrganization: "BASICA",
        credits: 2,
        level: 1
    },
    {
        subject: "LAS TICS Y SOPORTE EN HARDWARE",
        curricularOrganization: "BASICA",
        credits: 2,
        level: 1
    },
    {
        subject: "PROGRAMACIÓN DE INTERFACES GRÁFICAS Y ESTRUCTURA DE DATOS",
        curricularOrganization: "BASICA",
        credits: 2,
        level: 1
    },
    {
        subject: "PROYECTO INTEGRADOR DE SABERES:CREACIÓN DE APLICACIONES DE ESCRITORIO",
        curricularOrganization: "BASICA",
        credits: 1,
        level: 1
    },
    {
        subject: "SISTEMAS DIGITALES PROGRAMABLES",
        curricularOrganization: "PROFESIONAL",
        credits: 3,
        level: 2
    },
    {
        subject: "SISTEMAS DE INFORMACIÓN",
        curricularOrganization: "PROFESIONAL",
        credits: 3,
        level: 2
    },
    {
        subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 2
    },
    {
        subject: "PROCESOS CONTABLES",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 2
    },
    {
        subject: "GESTION DE BASE DE DATOS",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 2
    },
    {
        subject: "PROYECTO INTEGRADOR DE SABERES: CREACIÓN DE APLICACIONES DE ESCRITORIO CON BASE DE DATOS",
        curricularOrganization: "PROFESIONAL",
        credits: 1,
        level: 2
    },
    {
        subject: "PROGRAMACION DE APLICACIONES PARA DISPOSITIVOS MOVILES",
        curricularOrganization: "PROFESIONAL",
        credits: 3,
        level: 3
    },
    {
        subject: "PROBABILIDADES Y PROCESOS ESTOCÁSTICOS",
        curricularOrganization: "PROFESIONAL",
        credits: 3,
        level: 3
    },
    {
        subject: "HERRAMIENTAS INFORMÁTICAS PARA EL DESPLIEGUE DE DIAGRAMAS",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 3
    },
    {
        subject: "APLICACIONES TECNOLOGICAS AUTONOMAS",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 3
    },
    {
        subject: "SOFTWARE APLICATIVO",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 3
    },
    {
        subject: "PROYECTO INTEGRADOR DE SABERES CREACION DE APLICACIONES WEB CON BASE A LA ARQUITECTURA CLIENTE SERVIDOR",
        curricularOrganization: "PROFESIONAL",
        credits: 1,
        level: 3
    },
    {
        subject: "COMUNICACIONES Y REDES DE DATOS",
        curriculumOrganization: "PROFESIONAL",
        credits: 3,
        level: 4
    },
    {
        subject: "SISTEMAS OPERATIVOS",
        curriculumOrganization: "PROFESIONAL",
        credits: 2,
        level: 4
    },
    {
        subject: "HERRAMIENTAS CASE",
        curriculumOrganization: "PROFESIONAL",
        credits: 2,
        level: 4
    },
    {
        subject: "DERECHO Y SEGURIDAD INFORMATICA",
        curriculumOrganization: "PROFESIONAL",
        credits: 2,
        level: 4
    },
    {
        subject: "TENDENCIAS TECNOLÓGICAS",
        curriculumOrganization: "PROFESIONAL",
        credits: 2,
        level: 4
    },
    {
        subject: "DESARROLLO DE PROYECTOS DE SOFTWARE",
        curriculumOrganization: "CURRICULAR INTEGRATION UNIT",
        credits: 3,
        level: 4
    }
];

function filtrarPorNivel(subjects, nivel) {
    // Filtrar las asignaturas del nivel especificado
    let asignaturasNivel = subjects.filter(asignatura => asignatura.level === nivel);

    
    let mensaje = "Asignaturas del Nivel " + nivel + ":\n";
    asignaturasNivel.forEach(asignatura => {
        mensaje += `- ${asignatura.subject}\n`;
    });

    alert(mensaje);
}


filtrarPorNivel(subjects, 4);