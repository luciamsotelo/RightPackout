import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css'; // Import your CSS file

function AutoCloseExample() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (dropdownId) => {
    setOpenDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15vh', // Adjusted from '09vh' to '9vh'
    
  };

  const dropdownStyle = {
    margin: '0 10px',
  };

  return (
    <div style={containerStyle}>
      <Dropdown
        className="d-inline mx-2"
        onMouseEnter={() => handleMouseEnter('dropdown1')}
        onMouseLeave={handleMouseLeave}
        show={openDropdown === 'dropdown1'}
        style={dropdownStyle}
      >
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Content Packing
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className="custom-dropdown-item" href="/pack">
            Packout & Packback
          </Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/storage">
            Storage
          </Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/moving">
            Moving Items
          </Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/preservations">
            Preservations
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        className="d-inline mx-2"
        onMouseEnter={() => handleMouseEnter('dropdown2')}
        onMouseLeave={handleMouseLeave}
        show={openDropdown === 'dropdown2'}
        style={dropdownStyle}
      >
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          Sanitation Solutions
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className="custom-dropdown-item" href="/drapery">
            Drapery
          </Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/mold">
            Mold
          </Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/fire">
            Fire
          </Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/restoration">
            Restoration
          </Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/window">
            Window Cleaning
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        className="d-inline mx-2"
        onMouseEnter={() => handleMouseEnter('dropdown3')}
        onMouseLeave={handleMouseLeave}
        show={openDropdown === 'dropdown3'}
        style={dropdownStyle}
      >
        <Dropdown.Toggle id="dropdown-autoclose-outside">
          Consultation Guidance
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className="custom-dropdown-item" href="/consultation">
            Contents Consultation
          </Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/consultation">
            Insurance Reports
          </Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/ consultation">
            Total Loss Inventory
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        className="d-inline mx-2"
        onMouseEnter={() => handleMouseEnter('dropdown4')}
        onMouseLeave={handleMouseLeave}
        show={openDropdown === 'dropdown4'}
        style={dropdownStyle}
      >
        <Dropdown.Toggle id="dropdown-autoclose-false">
          Management Services
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className="custom-dropdown-item" href="/management">
            Site Coordination
          </Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/management">
            Site Management
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </div>
  );
}

export default AutoCloseExample;
