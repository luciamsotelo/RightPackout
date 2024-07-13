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
    height: '30vh', // Adjusted from '09vh' to '9vh'
  };

  return (
    <div className="container" style={{ ...containerStyle}}>
      <div className="row w-100" style={{ textAlign: 'center'}}>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
          <Dropdown
            className="d-inline-block w-100"
            onMouseEnter={() => handleMouseEnter('dropdown1')}
            onMouseLeave={handleMouseLeave}
            show={openDropdown === 'dropdown1'}
          >
            <Dropdown.Toggle id="dropdown-autoclose-true" className="w-100">
              Content Packing
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="custom-dropdown-item" href="/pack">
                Pack Out & Pack Back
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
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
          <Dropdown
            className="d-inline-block w-100"
            onMouseEnter={() => handleMouseEnter('dropdown2')}
            onMouseLeave={handleMouseLeave}
            show={openDropdown === 'dropdown2'}
          >
            <Dropdown.Toggle id="dropdown-autoclose-inside" className="w-100">
              Sanitation Solutions
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="custom-dropdown-item" href="/drapery">
                Drapery
              </Dropdown.Item>
              <Dropdown.Item className="custom-dropdown-item" href="/mold">
                Mold Restoration
              </Dropdown.Item>
              <Dropdown.Item className="custom-dropdown-item" href="/fire">
                Fire Restoration
              </Dropdown.Item>
              <Dropdown.Item className="custom-dropdown-item" href="/restoration">
                Furniture Cleaning
              </Dropdown.Item>
              <Dropdown.Item className="custom-dropdown-item" href="/window">
                Window Cleaning
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
          <Dropdown
            className="d-inline-block w-100"
            onMouseEnter={() => handleMouseEnter('dropdown3')}
            onMouseLeave={handleMouseLeave}
            show={openDropdown === 'dropdown3'}
          >
            <Dropdown.Toggle id="dropdown-autoclose-outside" className="w-100">
              Consultation Guidance
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="custom-dropdown-item" href="/consultation">
                Contents Consultation
              </Dropdown.Item>
              <Dropdown.Item className="custom-dropdown-item" href="/consultation">
                Insurance Reports
              </Dropdown.Item>
              <Dropdown.Item className="custom-dropdown-item" href="/consultation">
                Total Loss Inventory
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
          <Dropdown
            className="d-inline-block w-100"
            onMouseEnter={() => handleMouseEnter('dropdown4')}
            onMouseLeave={handleMouseLeave}
            show={openDropdown === 'dropdown4'}
          >
            <Dropdown.Toggle id="dropdown-autoclose-false" className="w-100">
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

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
          <Dropdown
            className="d-inline-block w-100"
            onMouseEnter={() => handleMouseEnter('dropdown5')}
            onMouseLeave={handleMouseLeave}
            show={openDropdown === 'dropdown5'}
          >
            <Dropdown.Toggle id="dropdown-autoclose-specialty" className="w-100">
              Specialty Cleaning
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="custom-dropdown-item" href="/construction">
                Construction Clean Up
              </Dropdown.Item>
              <Dropdown.Item className="custom-dropdown-item" href="/hoarder">
                Hoarder Clean Up
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default AutoCloseExample;
