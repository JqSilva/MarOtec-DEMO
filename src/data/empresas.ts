import saesa from '../assets/images/empresas/grupo-saesa.png';
import transelec from '../assets/images/empresas/transelec.webp';
import cge from '../assets/images/empresas/cge.png';
import engie from '../assets/images/empresas/engie.png';
import conelsur from '../assets/images/empresas/conelsur.jpg';
import cget from '../assets/images/empresas/cget.png';
import VAIPS from '../assets/images/empresas/vaips.webp';
import EQUANS from '../assets/images/empresas/EQUANS.jpg';
import electricidadhd from '../assets/images/empresas/electricidadh&d.webp';
import CHILQUINTA from '../assets/images/empresas/chilquinta.png';
import ISA from '../assets/images/empresas/isa.webp';
import MF from '../assets/images/empresas/mf.webp';
import consel from '../assets/images/empresas/consel.webp';
import ollagua from '../assets/images/empresas/ollagua.webp';
import DIEMAC from '../assets/images/empresas/DIEMAC.webp';

export interface Empresa {
  nombre: string;
  logo: ImageMetadata;
  url: string;
}

export const empresas: Empresa[] = [
  {
    nombre: "Grupo Saesa",
    logo: saesa,
    url: "https://web.gruposaesa.cl/"
  },
  {
    nombre: "Transelec",
    logo: transelec,
    url: "https://www.transelec.cl/"
  },
  {
    nombre: "CGE",
    logo: cge,
    url: "https://www.cge.cl/"
  },
  {
    nombre: "ENGIE",
    logo: engie,
    url: "https://www.engie.cl/"
  },
  {
    nombre: "Conelsur",
    logo: conelsur,
    url: "https://www.conelsur.com/"
  },
  {
    nombre: "CGE Transmisión",
    logo: cget,
    url: "https://www.cgetransmision.cl/"
  },
  
  {
    nombre: "VAIPS",
    logo: VAIPS,
    url: "https://web.vaips.cl/"
  },

  {
    nombre: "Equans",
    logo: EQUANS,
    url: "https://www.equans.cl/"
  },

  {
    nombre: "Electricidad H&D",
    logo: electricidadhd,
    url: "https://www.electricidadhyd.com/"
  },

  {
    nombre: "CHILQUINTA T",
    logo: CHILQUINTA,
    url: "https://www.electricidadhyd.com/"
  },

  {
    nombre: "ISA Energía",
    logo: ISA,
    url: "https://chile.isaenergia.com/es/"
  },

  {
    nombre: "Marmul Falcon",
    logo: MF,
    url: "https://www.marmulfalcon.com/"
  },

  {
    nombre: "CONSEL",
    logo: consel,
    url: "https://econsel.cl/"
  },

  {
    nombre: "OLLAGUA",
    logo: ollagua,
    url: "https://collagua.cl/"
  },

  {
    nombre: "Diemac",
    logo: DIEMAC,
    url: "https://www.diemac.cl/"
  }
];


