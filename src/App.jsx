import SemanaAccordion from './components/SemanaAccordion';
import './App.css';

import { useState } from 'react';
import RankingCursoModal from './components/RankingCursoModal';
import DesempenoEstudianteCurso from './components/DesempenoEstudianteCurso';

const estudiantes = [
  { nombre: 'Ana',     puntosTotales: 98, puntosS1: 58, puntosS2: 40 },
  { nombre: 'Carlos',  puntosTotales: 92, puntosS1: 52, puntosS2: 40 },
  { nombre: 'Jazmín',  puntosTotales: 95, puntosS1: 55, puntosS2: 40 },

  { nombre: 'Pedro',   puntosTotales: 85, puntosS1: 50, puntosS2: 35 },
  { nombre: 'Camila',  puntosTotales: 83, puntosS1: 50, puntosS2: 33 },
  { nombre: 'David',   puntosTotales: 88, puntosS1: 50, puntosS2: 38 },
  { nombre: 'Valeria', puntosTotales: 81, puntosS1: 46, puntosS2: 35 },

  { nombre: 'Luis',    puntosTotales: 75, puntosS1: 45, puntosS2: 30 },
  { nombre: 'Andrea',  puntosTotales: 78, puntosS1: 48, puntosS2: 30 },
  { nombre: 'Tomás',   puntosTotales: 71, puntosS1: 42, puntosS2: 29 },
  { nombre: 'Paula',   puntosTotales: 74, puntosS1: 44, puntosS2: 30 },
  { nombre: 'Erick',   puntosTotales: 76, puntosS1: 46, puntosS2: 30 },
  { nombre: 'Lucero',  puntosTotales: 79, puntosS1: 48, puntosS2: 31 },

  { nombre: 'Carla',   puntosTotales: 62, puntosS1: 37, puntosS2: 25 },
  { nombre: 'Sofía',   puntosTotales: 65, puntosS1: 39, puntosS2: 26 },
  { nombre: 'Martín',  puntosTotales: 68, puntosS1: 40, puntosS2: 28 },
  { nombre: 'Iván',    puntosTotales: 64, puntosS1: 38, puntosS2: 26 },
  { nombre: 'Natalia', puntosTotales: 66, puntosS1: 39, puntosS2: 27 },
  { nombre: 'César',   puntosTotales: 61, puntosS1: 36, puntosS2: 25 },
  { nombre: 'Bárbara', puntosTotales: 69, puntosS1: 42, puntosS2: 27 },

  { nombre: 'Kaleb',   puntosTotales: 10, puntosS1: 6,  puntosS2: 4 },
  { nombre: 'Lucía',   puntosTotales: 55, puntosS1: 33, puntosS2: 22 },
  { nombre: 'Samuel',  puntosTotales: 43, puntosS1: 26, puntosS2: 17 },
  { nombre: 'Elena',   puntosTotales: 38, puntosS1: 22, puntosS2: 16 },
  { nombre: 'Joel',    puntosTotales: 29, puntosS1: 18, puntosS2: 11 },
];

const data = [
  { 
    semana: 'Semana 01',
    maxPuntos: 60,       // <-- máximo puntos para Semana 01
    contenidos: [
      {
        titulo: 'Caso de Estudio - ITIL',
        tipo: 'PDF',
        archivo: '#',
        revisado: true,
      },
      {
        titulo: 'Laboratorio - Actividades con git',
        tipo: 'PDF',
        archivo: '#',
        revisado: true,
      },
    ],
  },
  
  {
    semana: 'Semana 02',
    maxPuntos: 40,       // <-- máximo puntos para Semana 02
    contenidos: [],
  },
];

const maxPuntosCurso = data.reduce((acc, semana) => acc + semana.maxPuntos, 0);

function App() {
  // Simulación del estudiante logueado
  const nombreEstudianteLogueado = 'Kaleb';

  // Buscar el estudiante actual en la lista
  const estudianteActual = estudiantes.find(
    (e) => e.nombre === nombreEstudianteLogueado
  );

  const [mostrarRankingCurso, setMostrarRankingCurso] = useState(false);
  const [mostrarDesempenoCurso, setMostrarDesempenoCurso] = useState(false);

  return (
    <div className="app-container">
      {data.map((semanaData, i) => (
        <SemanaAccordion
          key={i}
          {...semanaData}
          estudiantes={estudiantes}
          estudianteActual={estudianteActual}
          maxPuntos={semanaData.maxPuntos}  // <--- PASO maxPuntos
        />
      ))}

      {/* 🔧 Botones adicionales para el ranking general del curso */}
      <div className="ranking-curso-container">
        <h2>Ranking General del Curso</h2>
        <button className="ranking-btn" onClick={() => setMostrarRankingCurso(true)}>
          Ver ranking general
        </button>
        <button className="ranking-btn" onClick={() => setMostrarDesempenoCurso(true)}>
          Ver mi rendimiento general
        </button>
      </div>

      {mostrarRankingCurso && (
        <RankingCursoModal
          estudiantes={estudiantes}
          maxPuntos={maxPuntosCurso}
          onClose={() => setMostrarRankingCurso(false)}
        />
      )}

      {mostrarDesempenoCurso && (
        <DesempenoEstudianteCurso
          estudiantes={estudiantes}
          estudianteActual={estudianteActual}
          maxPuntos={maxPuntosCurso}
          onClose={() => setMostrarDesempenoCurso(false)}
        />
      )}
    </div>
  );
}

export default App;



