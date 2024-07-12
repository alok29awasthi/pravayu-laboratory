import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Dropdowns.css';

const Dropdowns = () => {
  return (
    <Dropdown as={ButtonGroup}>
      <Link to='/service' className='nav-link'><Button variant="link" className="nav-link">Services</Button></Link>
      <Dropdown.Toggle split variant="link" id="dropdown-split-basic" />
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to='/service/environmental-monitoring'>Environmental Monitoring</Dropdown.Item>
        <Dropdown.Item as={Link} to='/service/project-reports'>Project Reports</Dropdown.Item>
        <Dropdown.Item as={Link} to='/service/environmental-clearance'>Environmental Clearance</Dropdown.Item>
        <Dropdown.Item as={Link} to='/service/groundwater-nocs'>Groundwater NOCs</Dropdown.Item>
        <Dropdown.Item as={Link} to='/service/environmental-nocs'>Environmental NOCs</Dropdown.Item>
        <Dropdown.Item as={Link} to='/service/epr-registration'>EPR Registration</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Dropdowns;