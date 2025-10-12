import imagen_servicio from '../assets/images/servicios/servicio.webp';
import supervision from '../assets/images/servicios/supervision.webp';
import camion_hidroelevador from '../assets/images/servicios/camion-hidroelevador.webp';
import normativa from '../assets/images/servicios/normativa-vigente.webp';
import rescate_altura from '../assets/images/servicios/rescate-altura.webp';
import mantenimiento13kv from '../assets/images/servicios/mantenimiento13-36kv.webp';
import lavado_aislacion from '../assets/images/servicios/lavado-aislacion.webp';
import corte_poda from '../assets/images/servicios/poda-arboles.webp';
import andamio_aislado from '../assets/images/servicios/andamio-aislado.webp';
import seguridad_riesgos from '../assets/images/servicios/seguridad-riesgos.webp';
import curso_basico_mt from '../assets/images/servicios/curso-basico-mt.webp';
import curso_basico_at from '../assets/images/servicios/curso-basico-at.webp';


import trabajos_en_tension from '../assets/images/servicios/trabajos-en-tension.webp';
import ingeniero_tct from '../assets/images/servicios/ingeniero-tct.webp';
import ingeniero_hsec from '../assets/images/servicios/ingeniero-hsec.webp';
import especialista_tct from '../assets/images/servicios/especialista-tct.webp';
import inspector_tct from '../assets/images/servicios/inspector-tct.webp';



export const cursos = [
  // === CAPACITACIONES ===
  {
    tipo: "capacitacion",
    area: "Líneas Energizadas",
    tension: "MT",
    enfoque: "Supervisión",
    icono: "eye",
    codigo: "CAP-004-TcT-MT-SUP-01",
    resumen: "Supervisión de trabajos en instalaciones energizadas hasta 36 kV.",
    modalidad: "Presencial",
    horas: 16,
    imagen: supervision,
  },
  {
    tipo: "capacitacion",
    area: "Líneas Energizadas",
    tension: "MT",
    enfoque: "Camión hidroelevador aislado",
    icono: "truck",
    codigo: "CAP-004-TcT-MT-CH-01",
    resumen: "Uso seguro de camión hidroelevador aislado en MT.",
    modalidad: "Presencial",
    horas: 16,
    imagen: camion_hidroelevador,
  },
  {
    tipo: "capacitacion",
    area: "Líneas Energizadas",
    tension: "MT",
    enfoque: "Normativa vigente",
    icono: "file-text",
    codigo: "CAP-007-TcT-MT-NORM-01",
    resumen: "Normativa para trabajos en instalaciones energizadas hasta 36 kV.",
    modalidad: "Presencial",
    horas: 8,
    imagen: normativa,
  },
  {
    tipo: "capacitacion",
    area: "Líneas Energizadas",
    tension: "MT",
    enfoque: "Rescate en altura / SPDC",
    icono: "life-buoy",
    codigo: "CAP-008-TcT-MT-RA-01",
    resumen: "Rescate en altura y uso seguro de SPDC.",
    modalidad: "Presencial",
    horas: 8,
    imagen: rescate_altura,
  },
  {
    tipo: "capacitacion",
    area: "Líneas Energizadas",
    tension: "MT",
    enfoque: "Mantenimiento 13,2–36 kV",
    icono: "wrench",
    codigo: "CAP-009-TcT-MT-MANT-01",
    resumen: "Mantenimiento en instalaciones de 13,2 a 36 kV.",
    modalidad: "Presencial",
    horas: 45,
    imagen: mantenimiento13kv,
  },
  {
    tipo: "capacitacion",
    area: "Líneas Energizadas",
    tension: "MT",
    enfoque: "Lavado de aislación",
    icono: "droplets",
    codigo: "CAP-010-TcT-MT-LAV-01",
    resumen: "Lavado de aislación en instalaciones energizadas hasta 36 kV.",
    modalidad: "Presencial",
    horas: 16,
    imagen: lavado_aislacion, 
  },
  {
    tipo: "capacitacion",
    area: "Líneas Energizadas",
    tension: "MT",
    enfoque: "Corte y poda de árboles",
    icono: "scissors",
    codigo: "CAP-011-TcT-MT-CP-01",
    resumen: "Corte y poda de árboles en instalaciones energizadas hasta 36 kV.",
    modalidad: "Presencial",
    horas: 16,
    imagen: corte_poda, 
  },
  {
    tipo: "capacitacion",
    area: "Subestaciones",
    tension: "MT",
    enfoque: "Andamio aislado",
    icono: "ladder",
    codigo: "CAP-005-TcT-MT-TAA-01",
    resumen: "Uso seguro de andamio aislado en subestaciones MT.",
    modalidad: "Presencial",
    horas: 16,
    imagen: andamio_aislado, 
  },
  {
    tipo: "capacitacion",
    area: "Subestaciones",
    tension: "MT",
    enfoque: "Seguridad y riesgos eléctricos",
    icono: "shield-alert",
    codigo: "CAP-006-TcT-MT-SEG-01",
    resumen: "Riesgos eléctricos para trabajos en instalaciones energizadas hasta 36 kV.",
    modalidad: "Presencial",
    horas: 8,
    imagen: seguridad_riesgos, 
  },
  {
    tipo: "capacitacion",
    area: "Curso Básico LLVV",
    tension: "MT",
    enfoque: "Trabajos próximos",
    icono: "zap",
    codigo: "CAP-001-TcT-MT-01",
    resumen: "Trabajos próximos a instalaciones energizadas (MT).",
    modalidad: "Presencial",
    horas: 8,
    imagen: curso_basico_mt, 
  },
  {
    tipo: "capacitacion",
    area: "Curso Básico LLVV",
    tension: "AT",
    enfoque: "Trabajos próximos",
    icono: "zap",
    codigo: "CAP-002-TcT-AT-01",
    resumen: "Trabajos próximos a instalaciones energizadas (AT).",
    modalidad: "Presencial",
    horas: 8,
    imagen: curso_basico_at,
  },

  // === CERTIFICACIONES ===
  {
    tipo: "certificacion",
    area: "Instalaciones Energizadas",
    tension: "MT",
    enfoque: "Trabajos en tensión",
    icono: "award",
    codigo: "CERT-001-TcT-MT-01",
    resumen: "Certificación de trabajos en instalaciones energizadas hasta 36 kV.",
    modalidad: "Presencial",
    horas: 40,
    imagen: trabajos_en_tension, 
  },
  {
    tipo: "certificacion",
    area: "Instalaciones Energizadas",
    tension: "MT",
    enfoque: "Ingeniero TcT",
    icono: "graduation-cap",
    codigo: "CERT-002-TcT-MT-IE-01",
    resumen: "Certificación para Ingeniero TcT (hasta 36 kV).",
    modalidad: "Presencial",
    horas: 8,
    imagen: ingeniero_tct,
  },
  {
    tipo: "certificacion",
    area: "Instalaciones Energizadas",
    tension: "MT",
    enfoque: "Ingeniero HSEC",
    icono: "hard-hat",
    codigo: "CERT-003-TcT-MT-HSEC-01",
    resumen: "Certificación para Ingeniero HSEC (hasta 36 kV).",
    modalidad: "Presencial",
    horas: 8,
    imagen: ingeniero_hsec, 
  },
  {
    tipo: "certificacion",
    area: "Instalaciones Energizadas",
    tension: "MT",
    enfoque: "Especialista TcT",
    icono: "badge-check",
    codigo: "CERT-004-TcT-MT-ESP-01",
    resumen: "Certificación de Especialista TcT (hasta 36 kV).",
    modalidad: "Presencial",
    horas: 8,
    imagen: especialista_tct, 
  },
  {
    tipo: "certificacion",
    area: "Instalaciones Energizadas",
    tension: "MT",
    enfoque: "Inspector de TcT",
    icono: "search-check",
    codigo: "CERT-005-TcT-MT-IT-01",
    resumen: "Certificación de Inspector de TcT (hasta 36 kV).",
    modalidad: "Presencial",
    horas: 8,
    imagen: inspector_tct, 
  },
];