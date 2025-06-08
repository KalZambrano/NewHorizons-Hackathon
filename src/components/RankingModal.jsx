import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import './Ranking.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// 🎯 NUEVO esquema de colores
const getColor = (puntos) => {
  if (puntos >= 90) return 'rgba(54, 162, 235, 0.6)';         // azul
  if (puntos >= 80) return 'rgba(75, 192, 75, 0.6)';          // verde
  if (puntos >= 70) return 'rgba(255, 205, 86, 0.6)';         // amarillo
  if (puntos >= 60) return 'rgba(255, 159, 64, 0.6)';         // naranja
  return 'rgba(255, 99, 132, 0.6)';                           // rojo
};

const getBorderColor = (puntos) => {
  if (puntos >= 90) return 'rgba(54, 162, 235, 1)';
  if (puntos >= 80) return 'rgba(75, 192, 75, 1)';
  if (puntos >= 70) return 'rgba(255, 205, 86, 1)';
  if (puntos >= 60) return 'rgba(255, 159, 64, 1)';
  return 'rgba(255, 99, 132, 1)';
};

const RankingModal = ({ estudiantes, onClose }) => {
  const data = {
    labels: estudiantes.map(e => e.nombre),
    datasets: [
      {
        label: 'Puntos obtenidos (%)',
        data: estudiantes.map(e => e.puntos),
        backgroundColor: estudiantes.map(e => getColor(e.puntos)),
        borderColor: estudiantes.map(e => getBorderColor(e.puntos)),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        max: 100,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Porcentaje (%)',
        },
      },
    },
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Ranking semanal por puntos',
      },
    },
  };

  const height = estudiantes.length * 40;

  return (
    <div className="ranking-overlay">
      <div className="ranking-modal">
        <h3>Ranking de estudiantes</h3>
        <div style={{ height: `${height}px` }}>
          <Bar data={data} options={options} />
        </div>
        <button className="cerrar-btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default RankingModal;
