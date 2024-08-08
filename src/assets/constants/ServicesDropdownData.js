import { 
  GiWindsock, GiFurnace, GiPaintBucket, GiMagnifyingGlass 
} from "react-icons/gi";
import { 
  FaAirFreshener, FaLeaf, FaWater, FaSwimmer, FaClipboardCheck, 
  FaBullhorn, FaFilter, FaSolarPanel, FaTasks 
} from "react-icons/fa";
import { 
  MdNoiseAware, MdOutlineFactory, MdOutlineWaterDrop, MdRecycling, 
  MdOutlineAssessment 
} from "react-icons/md";
import { 
  BiRecycle, BiSlideshow, BiAnalyse, BiCategory 
} from "react-icons/bi";
import { 
  HiOutlineDocumentReport, HiClipboardList 
} from "react-icons/hi";
import { 
  SiAnimalplanet, SiGooglemaps 
} from "react-icons/si";
import { 
  IoIosLeaf 
} from "react-icons/io";

export const servicesData = [
  {
    category: 'Air Quality Testing',
    icon: GiWindsock,
    items: [
      { 
        name: 'Ambient Air', 
        link: '/services/air-quality-ambient', 
        icon: GiWindsock,
        description: 'Ambient air quality testing involves monitoring the quality of outdoor air in various environments such as urban, rural, and industrial areas. This testing identifies concentrations of pollutants like particulate matter (PM), nitrogen dioxide (NO2), sulfur dioxide (SO2), carbon monoxide (CO), ozone (O3), and volatile organic compounds (VOCs). The data collected helps in assessing compliance with air quality standards, identifying pollution sources, and formulating strategies to improve air quality and protect public health.'
      },
      { 
        name: 'Indoor Air', 
        link: '/services/air-quality-indoor', 
        icon: FaAirFreshener,
        description: 'Indoor air quality testing focuses on the air within buildings, including homes, offices, schools, and healthcare facilities. This testing identifies contaminants such as mold spores, VOCs, radon, carbon monoxide, and allergens. By evaluating ventilation systems and identifying sources of pollution, this testing ensures a healthy indoor environment, reduces the risk of respiratory issues, and enhances overall well-being for occupants.'
      },
    ],
  },
  {
    category: 'Noise Level Testing',
    icon: MdNoiseAware,
    items: [
      { 
        name: 'Ambient Noise', 
        link: '/services/noise-ambient', 
        icon: MdNoiseAware,
        description: 'Ambient noise testing measures the background noise levels in different environments, including residential, commercial, and industrial areas. This testing helps in assessing the impact of noise pollution on communities, identifying sources of excessive noise, and ensuring compliance with local noise regulations. The results can guide urban planning and noise control measures to create quieter and more livable environments.'
      },
      { 
        name: 'Indoor Noise', 
        link: '/services/noise-indoor', 
        icon: FaBullhorn,
        description: 'Indoor noise testing evaluates sound levels within enclosed spaces such as offices, classrooms, hospitals, and residential buildings. This testing identifies sources of disruptive noise, assesses the effectiveness of soundproofing measures, and ensures that noise levels are within acceptable limits to promote a comfortable and productive indoor environment.'
      },
      { 
        name: 'DG Source Noise', 
        link: '/services/noise-dg-source', 
        icon: MdOutlineFactory,
        description: 'Diesel generator (DG) source noise testing measures the noise emissions from diesel generators used in various settings, including industrial, commercial, and residential areas. This testing ensures compliance with noise regulations, identifies the need for noise control measures, and helps in mitigating the impact of generator noise on surrounding communities.'
      },
    ],
  },
  {
    category: 'Stack Emission Testing',
    icon: GiFurnace,
    items: [
      { 
        name: 'DG Set', 
        link: '/services/stack-emission-dg', 
        icon: FaFilter,
        description: 'Stack emission testing for diesel generator (DG) sets involves measuring the pollutants released into the air from the generator’s exhaust stack. This testing helps in assessing compliance with emission standards, identifying the need for emission control measures, and minimizing the environmental impact of diesel generators.'
      },
      { 
        name: 'Furnace', 
        link: '/services/stack-emission-furnace', 
        icon: GiFurnace,
        description: 'Furnace stack emission testing measures the pollutants emitted from industrial furnaces, including those used in manufacturing, metal processing, and chemical production. This testing ensures compliance with environmental regulations, identifies emission sources, and guides efforts to reduce air pollution from industrial operations.'
      },
      { 
        name: 'Oven', 
        link: '/services/stack-emission-oven', 
        icon: BiSlideshow,
        description: 'Oven stack emission testing evaluates the pollutants released from industrial ovens used in baking, coating, and other manufacturing processes. This testing helps in maintaining compliance with air quality standards, improving process efficiency, and minimizing environmental impact.'
      },
      { 
        name: 'Boiler', 
        link: '/services/stack-emission-boiler', 
        icon: FaSolarPanel,
        description: 'Boiler stack emission testing measures the emissions from boilers used in various industries, including power generation, manufacturing, and heating. This testing ensures compliance with emission regulations, identifies opportunities for efficiency improvements, and reduces the environmental footprint of boiler operations.'
      },
      { 
        name: 'Paint Booth', 
        link: '/services/stack-emission-paint-booth', 
        icon: GiPaintBucket,
        description: 'Paint booth stack emission testing assesses the pollutants emitted during painting and coating processes in automotive, aerospace, and manufacturing industries. This testing ensures compliance with air quality standards, identifies the need for emission control systems, and enhances workplace safety.'
      },
      { 
        name: 'Piling Tower', 
        link: '/services/stack-emission-piling-tower', 
        icon: MdOutlineFactory,
        description: 'Piling tower stack emission testing measures the emissions from piling operations used in construction and foundation work. This testing helps in assessing the environmental impact of construction activities, ensuring compliance with regulations, and implementing measures to reduce emissions.'
      },
    ],
  },
  {
    category: 'Soil Testing',
    icon: IoIosLeaf,
    items: [
      { 
        name: 'Agricultural Soil', 
        link: '/services/soil-agricultural', 
        icon: IoIosLeaf,
        description: 'Agricultural soil testing evaluates soil health and fertility by analyzing nutrient levels, pH, organic matter, and contaminants. This testing helps farmers optimize crop production, manage soil health, and implement sustainable farming practices.'
      },
      { 
        name: 'Sludge', 
        link: '/services/soil-sludge', 
        icon: BiRecycle,
        description: 'Sludge testing analyzes the composition and quality of sludge generated from wastewater treatment processes. This testing ensures safe disposal or reuse of sludge, assesses compliance with environmental regulations, and identifies potential contaminants.'
      },
      { 
        name: 'Bottom Sediment', 
        link: '/services/soil-bottom-sediment', 
        icon: FaLeaf,
        description: 'Bottom sediment testing examines the composition and contamination levels of sediments from water bodies such as rivers, lakes, and reservoirs. This testing helps in assessing the impact of pollution on aquatic ecosystems, guiding sediment management practices, and ensuring compliance with environmental standards.'
      },
      { 
        name: 'Compost', 
        link: '/services/soil-compost', 
        icon: MdRecycling,
        description: 'Compost testing evaluates the quality and safety of compost used in agriculture, horticulture, and landscaping. This testing assesses nutrient content, pH, moisture levels, and potential contaminants to ensure that compost is suitable for use and supports healthy plant growth.'
      },
    ],
  },
  {
    category: 'Water Testing',
    icon: FaWater,
    items: [
      { 
        name: 'Drinking Water', 
        link: '/services/water-drinking', 
        icon: FaWater,
        description: 'Drinking water testing analyzes the quality of water from various sources, including groundwater and reverse osmosis (RO) treated water. This testing ensures that the water is safe for consumption, free from contaminants, and complies with health standards. Parameters tested include microbiological content, chemical composition, heavy metals, and physical characteristics.'
      },
      { 
        name: 'Surface Water', 
        link: '/services/water-surface', 
        icon: MdOutlineWaterDrop,
        description: 'Surface water testing evaluates the quality of water in rivers, lakes, streams, and reservoirs. This testing helps in monitoring pollution levels, assessing the health of aquatic ecosystems, and ensuring that water bodies meet regulatory standards for various uses, including recreation, irrigation, and wildlife habitat.'
      },
      { 
        name: 'Waste Water', 
        link: '/services/water-waste', 
        icon: FaSwimmer,
        description: 'Wastewater testing analyzes the quality of water discharged from various treatment processes, including Common Effluent Treatment Plants (CETP), Packaged Effluent Treatment Plants (PETP), Water Treatment Plants (WTP), Sewage Treatment Plants (STP), and Effluent Treatment Plants (ETP). This testing ensures that treated water meets regulatory standards, protects the environment, and identifies areas for process optimization.'
      },
      { 
        name: 'Swimming Pool Water', 
        link: '/services/water-swimming-pool', 
        icon: FaSwimmer,
        description: 'Swimming pool water testing evaluates the quality and safety of water in recreational pools. This testing monitors parameters such as pH, chlorine levels, total alkalinity, and microbial content to ensure that pool water is safe for swimmers and complies with health and safety standards.'
      },
    ],
  },
  {
    category: 'Lux Monitoring',
    icon: FaClipboardCheck,
    items: [
      { name: 'Lux Monitoring', link: '/services/lux-monitoring', icon: FaClipboardCheck,
        description: 'Lux monitoring involves measuring the intensity of light in various environments, including workplaces, schools, hospitals, and outdoor areas. This testing ensures that lighting levels are adequate for the tasks performed, promotes comfort and safety, and complies with lighting standards and regulations. Lux monitoring helps in optimizing lighting systems, reducing energy consumption, and enhancing the overall quality of the visual environment.'
       },
    ],
  },
  {
    category: 'Microbial Testing',
    icon: BiAnalyse,
    items: [
      { name: 'Swab Testing', link: '/services/microbial-swab', icon: HiClipboardList,
        description: 'Swab testing involves collecting samples from surfaces, equipment, and environments using sterile swabs to detect the presence of microbial contamination. This testing is essential in industries such as food processing, healthcare, and pharmaceuticals to ensure hygiene, prevent contamination, and maintain product safety.' },
      { name: 'Microbial Testing of Water', link: '/services/microbial-water', icon: BiAnalyse,
        description: 'Microbial testing of water analyzes the presence of bacteria, viruses, and other microorganisms in water sources, including drinking water, recreational water, and process water. This testing ensures that water is safe for consumption and use, prevents waterborne diseases, and complies with health standards.' },
    ],
  },
  {
    category: 'Environmental Compliance',
    icon: HiOutlineDocumentReport,
    items: [
      { name: 'Air and Water Act Compliance', link: '/services/compliance-air-water-act', icon: MdOutlineFactory,
        description: 'This involves ensuring that operations meet the regulatory requirements set by the Air and Water Act, which govern the quality of air and water resources. Compliance activities include monitoring emissions, discharges, and implementing measures to reduce environmental impact.' },
      { name: 'HWM, EWM, SWM, PWM, BMW Compliance', link: '/services/compliance-hwm-ewm-swm-pwm-bmw', icon: SiAnimalplanet,
        description: 'This involves adhering to regulations related to Hazardous Waste Management (HWM), E-Waste Management (EWM), Solid Waste Management (SWM), Plastic Waste Management (PWM), and Biomedical Waste Management (BMW). Compliance ensures proper handling, disposal, and recycling of waste to protect the environment and public health.' },
      { name: 'CTO, CTE, EC Condition Compliance', link: '/services/compliance-cto-cte-ec', icon: FaClipboardCheck,
        description: 'This involves meeting the conditions specified in Consent to Operate (CTO), Consent to Establish (CTE), and Environmental Clearance (EC) documents. Compliance activities include regular monitoring, reporting, and implementing necessary measures to fulfill regulatory requirements and maintain operational licenses.' },
      { name: 'Ground Water, Forest, Wildlife Clearances', link: '/services/compliance-clearances', icon: SiGooglemaps,
        description: 'These services involve obtaining necessary clearances and approvals from regulatory authorities for activities impacting groundwater, forest areas, and wildlife habitats. The process includes environmental impact assessments, documentation, and liaison with authorities to secure permits.' },
      { name: 'CPCB, SPCBs Clearances', link: '/services/compliance-cpcb-spcbs', icon: HiOutlineDocumentReport,
        description: 'These services involve assisting businesses in obtaining clearances from the Central Pollution Control Board (CPCB) and State Pollution Control Boards (SPCBs) for activities that impact the environment. This includes preparing and submitting applications, conducting environmental assessments, and ensuring compliance with regulatory requirements.' },
      { name: 'Pollution Control Systems Consultancy', link: '/services/compliance-pollution-control', icon: FaAirFreshener,
        description: 'This consultancy service involves designing and implementing pollution control systems to mitigate air, water, and noise pollution. The service includes engineering solutions, equipment supply, installation, and ensuring timely completion of projects to comply with environmental standards.' },
      { name: 'STP/ETP/WTP Services', link: '/services/compliance-stp-etp-wtp', icon: FaFilter,
        description: 'This service involves providing end-to-end solutions for Sewage Treatment Plants (STP), Effluent Treatment Plants (ETP), and Water Treatment Plants (WTP). The process includes designing, engineering, installation, erection, commissioning, and testing to ensure efficient treatment of wastewater and compliance with regulatory standards.' },
      { name: 'Environmental Auditing & Compliance Assessments', link: '/services/compliance-auditing-assessments', icon: MdRecycling,
        description: 'Environmental auditing involves evaluating an organization’s compliance with environmental regulations, policies, and best practices. Compliance assessments identify gaps, recommend corrective actions, and ensure that operations align with environmental standards.' },
      { name: 'Environmental Audits and Due Diligence', link: '/services/compliance-audits-due-diligence', icon: HiClipboardList,
        description: 'These services involve conducting comprehensive audits and due diligence assessments to evaluate environmental risks, liabilities, and compliance status. The process includes site inspections, document reviews, and reporting to support decision-making in mergers, acquisitions, and regulatory compliance.' },
      { name: 'Water Audit', link: '/services/compliance-water-audit', icon: FaWater,
        description: 'A water audit involves assessing water usage, identifying inefficiencies, and recommending measures to optimize water consumption. This service helps organizations reduce water waste, improve water management practices, and achieve sustainability goals.' },
      { name: 'EPR Registration', link: '/services/compliance-epr-registration', icon: BiRecycle,
        description: 'Extended Producer Responsibility (EPR) registration involves complying with regulations that require producers to manage the lifecycle of their products, including collection, recycling, and disposal. This service assists businesses in registering on the Central Pollution Control Board (CPCB) portal and fulfilling EPR obligations.' },
    ],
  },
  {
    category: 'Environmental Consultancy Services',
    icon: SiAnimalplanet,
    items: [
      { name: 'Environmental Clearances', link: '/services/consultancy-clearances', icon: HiOutlineDocumentReport,
        description: 'These services involve assisting businesses in obtaining environmental clearances from the State Environmental Impact Assessment Authority (SEIAA) and the Ministry of Environment, Forest and Climate Change (MOEF). The process includes preparing and submitting Environmental Impact Assessment (EIA) reports, managing public consultations, and ensuring compliance with regulatory requirements.' },
      { name: 'Environmental Impact Assessment', link: '/services/consultancy-eia', icon: SiAnimalplanet,
        description: 'An Environmental Impact Assessment (EIA) evaluates the potential environmental impacts of proposed projects or developments. This assessment helps in identifying mitigation measures, ensuring regulatory compliance, and promoting sustainable development.' },
      { name: 'Environmental Management Plan', link: '/services/consultancy-emp', icon: HiClipboardList,
        description: 'An Environmental Management Plan (EMP) outlines the strategies and actions to manage and mitigate environmental impacts during the construction and operation phases of a project. The plan includes monitoring, reporting, and implementing measures to ensure compliance with environmental regulations.' },
      { name: 'Social Impact Assessment', link: '/services/consultancy-sia', icon: BiAnalyse,
        description: 'Social Impact Assessment (SIA) evaluates the social consequences of proposed projects or developments on communities. This assessment identifies potential impacts, engages stakeholders, and recommends measures to enhance positive outcomes and minimize adverse effects.' },
      { name: 'Project Report/DPR Preparation', link: '/services/consultancy-dpr', icon: HiOutlineDocumentReport,
        description: 'These services involve preparing detailed project reports (DPRs) that outline the technical, financial, and environmental aspects of proposed projects. The reports support project planning, regulatory approvals, and investment decisions.' },
      { name: 'Sustainability Reporting Management', link: '/services/consultancy-sustainability-reporting', icon: FaLeaf,
        description: 'Sustainability reporting management involves tracking, analyzing, and reporting on an organization’s sustainability performance. This service helps businesses communicate their environmental, social, and governance (ESG) efforts, comply with reporting standards, and enhance transparency.' },
      { name: 'Process Optimization for EMP Compliance', link: '/services/consultancy-emp-compliance', icon: MdOutlineFactory,
        description: 'This service involves optimizing processes to ensure compliance with Environmental Management Plans (EMP). It includes identifying inefficiencies, implementing best practices, and monitoring performance to achieve environmental objectives.' },
      { name: 'Environmental Baseline Measurement', link: '/services/consultancy-baseline-measurement', icon: SiAnimalplanet,
        description: 'Environmental baseline measurement involves collecting data on environmental parameters such as air quality, water quality, soil health, and noise levels before starting a project. This baseline data provides a reference point for assessing the impact of the project and monitoring environmental changes.' },
    ],
  },
];
