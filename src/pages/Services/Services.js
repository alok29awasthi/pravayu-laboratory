import React, { useState } from 'react';
import './Services.css'; // Import your custom CSS file
import Modal from '../../components/Modal/Modal';
import Slide from '../../assets/images/slide1.jpg'
import Slide2 from '../../assets/images/slide2.jpg'

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: 'Environmental Monitoring (Air, Water, Soil, Noise, Stack Emission) Operation & Maintenance of STP/ETP',
      description: 'At PRAVAYU TESTING LABORATORY LLP, we are dedicated to providing thorough and precise environmental monitoring services. Our expertise spans across various environmental media including air, water, soil, noise, and stack emissions. Utilizing advanced technology and scientific methodologies, we conduct detailed assessments to measure pollutants, analyze environmental impact, and ensure compliance with stringent national and international standards. Our services are tailored to meet the specific needs of our clients, providing them with accurate data and actionable insights.\n\nIn addition to monitoring, we offer comprehensive Operation and Maintenance (O&M) services for Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP). Our O&M services are designed to ensure that these critical facilities operate at peak efficiency, comply with environmental regulations, and contribute to sustainable environmental management. Our team of experienced professionals is equipped with the knowledge and tools to handle routine maintenance, emergency repairs, and optimization of treatment processes, ensuring the highest standards of environmental protection and operational reliability.',
      image: Slide

    },
    {
      id: 2,
      name: 'Preparation of Project Reports/Environment Management Plan',
      description: 'PRAVAYU TESTING LABORATORY LLP excels in the preparation of detailed Project Reports and Environment Management Plans (EMP) that are essential for the successful planning and execution of various projects. Our comprehensive reports encompass all aspects of environmental impact, including baseline studies, risk assessments, mitigation strategies, and compliance with legal requirements. We employ a multidisciplinary approach, integrating scientific research, regulatory knowledge, and industry best practices to deliver robust and actionable reports.\n\nOur EMPs are meticulously crafted to address the specific environmental challenges of each project. They provide clear guidelines and strategies for mitigating adverse environmental impacts, enhancing sustainability, and ensuring compliance with environmental regulations. Our team works closely with clients to understand their project goals, constraints, and regulatory requirements, ensuring that our reports and EMPs are aligned with their objectives and facilitate smooth project implementation.',
      image: Slide2
    },
    {
      id: 3,
      name: 'Environmental Clearance from SEIAA/MOEF',
      description: 'Obtaining environmental clearance from regulatory authorities is a critical step in the development and execution of many projects. PRAVAYU TESTING LABORATORY LLP offers expert assistance in securing environmental clearances from the State Environment Impact Assessment Authority (SEIAA) and the Ministry of Environment, Forest, and Climate Change (MOEF). Our services include comprehensive environmental impact assessments, preparation of detailed project reports, and liaison with regulatory bodies to ensure compliance with environmental regulations.\n\nWe guide our clients through the entire clearance process, from initial application to final approval, ensuring that all necessary documentation and assessments are completed accurately and efficiently. Our deep understanding of regulatory frameworks and strong relationships with regulatory authorities enable us to navigate the complexities of the clearance process, minimizing delays and facilitating timely project approvals.',
      image: Slide
    },
    {
      id: 4,
      name: 'Groundwater NOCs from CGWA/CGWB',
      description: 'Groundwater is a vital resource, and its extraction is regulated to ensure sustainability and prevent overexploitation. PRAVAYU TESTING LABORATORY LLP provides comprehensive support in obtaining No Objection Certificates (NOCs) for groundwater extraction from the Central Ground Water Authority (CGWA) and the Central Ground Water Board (CGWB). Our services include preparation of detailed hydrogeological reports, application submission, and coordination with regulatory authorities to ensure compliance with groundwater regulations.\n\nOur team conducts thorough assessments to evaluate the availability and sustainability of groundwater resources, ensuring that our clients meet all legal and environmental requirements for groundwater extraction. We provide expert guidance throughout the application process, helping clients secure the necessary NOCs efficiently and effectively, and ensuring that their groundwater extraction activities are sustainable and compliant with regulatory standards.',
      image: Slide
    },
    {
      id: 5,
      name: 'Environmental NOCs (CTE/CTO/Biomedical Waste Authorization/Hazardous Waste Authorization) from State Pollution Control Board',
      description: 'Securing various environmental NOCs from the State Pollution Control Board is essential for businesses to operate legally and sustainably. PRAVAYU TESTING LABORATORY LLP assists clients in obtaining Consent to Establish (CTE), Consent to Operate (CTO), Biomedical Waste Authorization, and Hazardous Waste Authorization. Our services encompass the preparation and submission of applications, compliance audits, and regulatory liaison to ensure that all necessary permissions are secured efficiently.\n\nWe conduct thorough assessments to ensure that our client\'s operations meet all regulatory requirements for environmental protection. Our team prepares detailed documentation and coordinates with regulatory authorities to facilitate the approval process, minimizing delays and ensuring compliance with environmental regulations. Our expertise in environmental compliance and regulatory frameworks ensures that our clients can operate with confidence, knowing that they have met all necessary legal requirements.',
      image: Slide
    },
    {
      id: 6,
      name: 'EPR Registration on CPCB Portal',
      description: 'Extended Producer Responsibility (EPR) is a crucial regulatory requirement for manufacturers and producers, mandating them to manage the entire lifecycle of their products, including post-consumer waste. PRAVAYU TESTING LABORATORY LLP provides expert guidance and support for EPR registration on the Central Pollution Control Board (CPCB) portal. Our services include preparation of detailed EPR plans, compliance audits, and coordination with regulatory authorities to ensure smooth and successful registration.\n\nOur team conducts comprehensive assessments to evaluate our clients\' compliance with EPR regulations, providing actionable recommendations to enhance sustainability and regulatory compliance. We assist clients in preparing and submitting all necessary documentation, ensuring that their EPR registration is completed accurately and efficiently. Our expertise in EPR regulations and compliance ensures that our clients can meet their environmental responsibilities and contribute to a sustainable future.',
      image: Slide
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-box filtered-image" 
              style={{ '--bg-image': `url(${service.image})` }}
              onClick={() => openModal(service)}>
            <div className="service-name">+ {service.name}</div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <h3>{selectedService.name}</h3>
          <p>{selectedService.description}</p>
        </Modal>
      )}
    </div>
  );
};

export default Services;
