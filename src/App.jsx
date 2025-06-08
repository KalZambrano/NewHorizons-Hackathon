import SemanaAccordion from './components/SemanaAccordion';
import './App.css';

const estudiantes = [
  // Excelente (90–100) — 3 estudiantes
  { nombre: 'Ana', puntos: 98 },
  { nombre: 'Carlos', puntos: 92 },
  { nombre: 'Jazmín', puntos: 95 },

  // Bueno (80–89) — 4 estudiantes
  { nombre: 'Pedro', puntos: 85 },
  { nombre: 'Camila', puntos: 83 },
  { nombre: 'David', puntos: 88 },
  { nombre: 'Valeria', puntos: 81 },

  // Intermedio (70–79) — 6 estudiantes
  { nombre: 'Luis', puntos: 75 },
  { nombre: 'Andrea', puntos: 78 },
  { nombre: 'Tomás', puntos: 71 },
  { nombre: 'Paula', puntos: 74 },
  { nombre: 'Erick', puntos: 76 },
  { nombre: 'Lucero', puntos: 79 },

  // Bajo (60–69) — 7 estudiantes
  { nombre: 'Carla', puntos: 62 },
  { nombre: 'Sofía', puntos: 65 },
  { nombre: 'Martín', puntos: 68 },
  { nombre: 'Iván', puntos: 64 },
  { nombre: 'Natalia', puntos: 66 },
  { nombre: 'César', puntos: 61 },
  { nombre: 'Bárbara', puntos: 69 },

  // Deficiente (<60) — 5 estudiantes
  { nombre: 'Kaleb', puntos: 10 },
  { nombre: 'Lucía', puntos: 55 },
  { nombre: 'Samuel', puntos: 43 },
  { nombre: 'Elena', puntos: 38 },
  { nombre: 'Joel', puntos: 29 },
];

const data = [
  { 
    semana: 'Semana 01',
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
    contenidos: [],
  },
];

function App() {
  // Simulación del estudiante logueado
  const nombreEstudianteLogueado = 'Pedro';

  // Buscar el estudiante actual en la lista
  const estudianteActual = estudiantes.find(
    (e) => e.nombre === nombreEstudianteLogueado
  );

  return (
    <div className="app-container">
      {data.map((semana, i) => (
        <SemanaAccordion
          key={i}
          {...semana}
          estudiantes={estudiantes}
          estudianteActual={estudianteActual}
        />
      ))}
    </div>
  );
}

export default App;



