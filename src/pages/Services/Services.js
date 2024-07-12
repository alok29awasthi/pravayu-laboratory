import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Services.css'; // Import your custom CSS file
import Modal from '../../components/Modal/Modal';
import Slide from '../../assets/images/slide1.jpg'
import Slide2 from '../../assets/images/slide2.jpg'
import ServicesInfo from '../../components/ServicesInfo/ServicesInfo';

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation();

  const services = [
    {
      id: 1,
      title: 'Environmental Monitoring & STP/ETP Maintenance',
      smallDescription: 'Comprehensive monitoring and maintenance for environmental media and treatment plants.',
      description: 'At PRAVAYU TESTING LABORATORY LLP, we are dedicated to providing thorough and precise environmental monitoring services. Our expertise spans across various environmental media including air, water, soil, noise, and stack emissions. Utilizing advanced technology and scientific methodologies, we conduct detailed assessments to measure pollutants, analyze environmental impact, and ensure compliance with stringent national and international standards. Our services are tailored to meet the specific needs of our clients, providing them with accurate data and actionable insights.\n\nIn addition to monitoring, we offer comprehensive Operation and Maintenance (O&M) services for Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP). Our O&M services are designed to ensure that these critical facilities operate at peak efficiency, comply with environmental regulations, and contribute to sustainable environmental management. Our team of experienced professionals is equipped with the knowledge and tools to handle routine maintenance, emergency repairs, and optimization of treatment processes, ensuring the highest standards of environmental protection and operational reliability.',
      image: Slide
    },
    {
      id: 2,
      title: 'Project Reports & Environment Management Plans',
      smallDescription: 'Detailed project planning and environmental strategies for compliance and sustainability.',
      description: 'PRAVAYU TESTING LABORATORY LLP excels in the preparation of detailed Project Reports and Environment Management Plans (EMP) that are essential for the successful planning and execution of various projects. Our comprehensive reports encompass all aspects of environmental impact, including baseline studies, risk assessments, mitigation strategies, and compliance with legal requirements. We employ a multidisciplinary approach, integrating scientific research, regulatory knowledge, and industry best practices to deliver robust and actionable reports.\n\nOur EMPs are meticulously crafted to address the specific environmental challenges of each project. They provide clear guidelines and strategies for mitigating adverse environmental impacts, enhancing sustainability, and ensuring compliance with environmental regulations. Our team works closely with clients to understand their project goals, constraints, and regulatory requirements, ensuring that our reports and EMPs are aligned with their objectives and facilitate smooth project implementation.',
      image: Slide2
    },
    {
      id: 3,
      title: 'Environmental Clearance from SEIAA/MOEF',
      smallDescription: 'Expert assistance in securing environmental clearances from regulatory authorities.',
      description: 'Obtaining environmental clearance from regulatory authorities is a critical step in the development and execution of many projects. PRAVAYU TESTING LABORATORY LLP offers expert assistance in securing environmental clearances from the State Environment Impact Assessment Authority (SEIAA) and the Ministry of Environment, Forest, and Climate Change (MOEF). Our services include comprehensive environmental impact assessments, preparation of detailed project reports, and liaison with regulatory bodies to ensure compliance with environmental regulations.\n\nWe guide our clients through the entire clearance process, from initial application to final approval, ensuring that all necessary documentation and assessments are completed accurately and efficiently. Our deep understanding of regulatory frameworks and strong relationships with regulatory authorities enable us to navigate the complexities of the clearance process, minimizing delays and facilitating timely project approvals.',
      image: Slide
    },
    {
      id: 4,
      title: 'Groundwater NOCs from CGWA/CGWB',
      smallDescription: 'Support in obtaining No Objection Certificates for sustainable groundwater extraction.',
      description: 'Groundwater is a vital resource, and its extraction is regulated to ensure sustainability and prevent overexploitation. PRAVAYU TESTING LABORATORY LLP provides comprehensive support in obtaining No Objection Certificates (NOCs) for groundwater extraction from the Central Ground Water Authority (CGWA) and the Central Ground Water Board (CGWB). Our services include hydrogeological assessments, preparation of detailed application reports, and liaison with regulatory authorities to secure the necessary approvals.\n\nOur team of experts conducts thorough hydrogeological studies to assess groundwater availability, quality, and sustainability. We prepare detailed reports that comply with regulatory requirements and provide clear recommendations for sustainable groundwater extraction. Our goal is to help our clients obtain the necessary NOCs while promoting responsible and sustainable groundwater management practices.',
      image: Slide
    },
    {
      id: 5,
      title: 'Environmental NOCs from State Pollution Control Board',
      smallDescription: 'Assistance in obtaining various environmental NOCs for legal and sustainable operations.',
      description: 'Securing various environmental NOCs from the State Pollution Control Board is essential for legal compliance and sustainable operations. PRAVAYU TESTING LABORATORY LLP offers comprehensive assistance in obtaining these NOCs, including Consent to Establish (CTE) and Consent to Operate (CTO) under the Water (Prevention and Control of Pollution) Act, 1974, and the Air (Prevention and Control of Pollution) Act, 1981. Our services encompass detailed environmental assessments, preparation of application documents, and liaison with regulatory authorities to ensure smooth and timely approval processes.\n\nWe understand the importance of compliance with environmental regulations and work diligently to ensure that our clients meet all necessary requirements. Our team of experts is well-versed in the regulatory frameworks and procedures involved in obtaining NOCs, providing our clients with the guidance and support needed to achieve legal compliance and sustainable environmental performance.',
      image: Slide
    },
    {
      id: 6,
      title: 'EPR Registration on CPCB Portal',
      smallDescription: 'Guidance and support for Extended Producer Responsibility registration.',
      description: 'Extended Producer Responsibility (EPR) is a crucial regulatory requirement for manufacturers, importers, and brand owners involved in the production and sale of plastic products. PRAVAYU TESTING LABORATORY LLP offers comprehensive guidance and support for EPR registration on the Central Pollution Control Board (CPCB) portal. Our services include preparation of EPR action plans, documentation, and liaison with regulatory authorities to ensure compliance with EPR regulations.\n\nWe assist our clients in understanding their EPR obligations, developing effective action plans, and fulfilling all necessary documentation and reporting requirements. Our team of experts stays abreast of the latest regulatory developments and provides timely updates and advice to ensure that our clients remain compliant with EPR regulations. Our goal is to help our clients achieve sustainable and responsible plastic waste management practices while complying with regulatory requirements.',
      image: Slide
    }
  ];

  const sectionRefs = useRef(services.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {}));

  useEffect(() => {
    if (location.state?.serviceId) {
      const serviceId = location.state.serviceId;
      const offset = -100; // Adjust this offset as needed
      const element = sectionRefs.current[serviceId].current;
      const offsetTop = element.offsetTop + offset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, [location]);

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="services-container">
      <div className='full-page-left'/>
      <div className='full-page-right'/>
      <h3 className="services-title">
        <span>Our Services</span>
      </h3>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={service.id} id={`service-${service.id}`} ref={sectionRefs.current[service.id]} className={`service-box filtered-image ${index % 2 === 0 ? 'blue-background' : 'white-background'}`} onClick={() => openModal(service)}>
            {index % 2 === 0 ? (
              <>
                <ServicesInfo title={service.title} description={service.smallDescription} />
                <img src={service.image} alt="service-image" className="service-image" />
              </>
            ) : (
              <>
                <img src={service.image} alt="service-image" className="service-image" />
                <ServicesInfo title={service.title} description={service.smallDescription} />
              </>
            )}
          </div>
        ))}
      </div>

      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <h3>{selectedService.title}</h3>
          <p>{selectedService.description}</p>
        </Modal>
      )}
    </div>
  );
};

export default Services;
