import React from 'react';
import '../assets/styles/featuredServices.css';

const featuredServicesData = [
  {
    id: 1,
    name: 'Consultoría Ambiental',
    image: 'https://biodiversidad.cl/wp-content/uploads/2024/09/Garantiza-la-Seguridad-en-tu-Proyecto-Minero-4-1.png',
  },
  {
    id: 2,
    name: 'Capacitación Sostenible',
    image: 'https://biodiversidad.cl/wp-content/uploads/2024/09/Post-24-Eres-encargado-de-sustentabilidad-de-tu-empresa-2-1.png',
  },
  {
    id: 3,
    name: 'Monitoreo de Ecosistemas',
    image: 'https://biodiversidad.cl/wp-content/uploads/2024/09/Post-25_SI-estas-enfrentando-disputas-legales-4.png',
  },
];

const FeaturedServices = () => {
  return (
    <div className="featured-services">
      {featuredServicesData.map((service) => (
        <div className="featured-service" key={service.id}>
          <img src={service.image} alt={service.name} className="featured-service-image" />
          <h3>{service.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default FeaturedServices;
