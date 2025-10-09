import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/CostCalculator.css';

const CostCalculator = () => {
  const [formData, setFormData] = useState({
    floors: 'Ground',
    package: 'Basic Package @ 2099/sqft',
    groundFloorArea: '',
    firstFloorArea: '',
    secondFloorArea: '',
    thirdFloorArea: '',
    fourthFloorArea: '',
    waterSump: '',
    septicTank: '',
    wallLength: '',
    name: '',
    phone: '',
    location: '',
    totalArea: ''
  });

  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [totalCost, setTotalCost] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const isFormValid =
    formData.name.trim() !== '' &&
    /^\d{10}$/.test(formData.phone) &&
    formData.location.trim() !== '' &&
    formData.totalArea.trim() !== '';

  const getFloorsToShow = () => {
    switch (formData.floors) {
      case 'Ground': return ['ground'];
      case 'Ground + 1': return ['ground', 'first'];
      case 'Ground + 2': return ['ground', 'first', 'second'];
      case 'Ground + 3': return ['ground', 'first', 'second', 'third'];
      case 'Ground + 4': return ['ground', 'first', 'second', 'third', 'fourth'];
      default: return ['ground'];
    }
  };

  const calculateCost = (data) => {
    let cost = 0;
    const ratePerSqft = data.package.includes('2099')
      ? 2099
      : data.package.includes('2399')
        ? 2399
        : 2599;
    const rccSumpRate = 35;
    const septicRate = 20;

    const floorAreas = [
      data.groundFloorArea,
      data.firstFloorArea,
      data.secondFloorArea,
      data.thirdFloorArea,
      data.fourthFloorArea
    ];

    floorAreas.forEach(area => {
      if (area) {
        cost += parseInt(area, 10) * ratePerSqft;
      }
    });

    if (data.waterSump) {
      cost += parseInt(data.waterSump, 10) * rccSumpRate;
    }
    if (data.septicTank) {
      cost += parseInt(data.septicTank, 10) * septicRate;
    }
    // Compound wall: cost = length(ft) * 5 (height) * 425
    if (data.wallLength) {
      cost += parseInt(data.wallLength, 10) * 5 * 425;
    }
    return cost;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === 'name') {
      setErrors((prev) => ({
        ...prev,
        name: value.trim() ? '' : 'Name is required'
      }));
    }
    if (field === 'phone') {
      setErrors((prev) => ({
        ...prev,
        phone: /^\d{10}$/.test(value)
          ? ''
          : 'Enter a valid 10-digit phone number'
      }));
    }
    if (field === 'location' || field === 'totalArea') {
      // simple non-empty check
      setErrors((prev) => ({
        ...prev,
        [field]: value.trim() ? '' : `Please enter your ${field === 'location' ? 'location' : 'total area'}`
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    const cost = calculateCost(formData);
    setTotalCost(cost);
    setSubmitted(true);
  };

  const getFloorLabel = (floor) => {
    const labels = {
      ground: 'Ground Floor',
      first: 'First Floor',
      second: 'Second Floor',
      third: 'Third Floor',
      fourth: 'Fourth Floor'
    };
    return labels[floor];
  };

  const getFloorFieldName = (floor) => {
    const fieldNames = {
      ground: 'groundFloorArea',
      first: 'firstFloorArea',
      second: 'secondFloorArea',
      third: 'thirdFloorArea',
      fourth: 'fourthFloorArea'
    };
    return fieldNames[floor];
  };

  // Package rates for display
  const getPackageRate = () => {
    if (formData.package.includes('Basic')) return 2099;
    if (formData.package.includes('Standard')) return 2399;
    return 2599;
  };

  return (
    <section className="calculator-section">
      <div className="calculator-container">
        <motion.div
          className="calculator-header"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Home Construction Cost Calculator (2025) Chennai</h2>
          <p>You can arrive your Construction estimate here</p>
        </motion.div>

        <motion.form
          className="calculator-form"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <div className="form-controls">
            <div className="control-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="control-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                required
                pattern="\d{10}"
                title="Please enter a 10-digit phone number"
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

              <div className="control-group">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  required
                />
                {errors.location && <span className="error">{errors.location}</span>}
              </div>

              <div className="control-group">
                <label>Total Area (sq ft)</label>
                <input
                  type="number"
                  className="text-input"
                  placeholder="Enter total area in sqft"
                  value={formData.totalArea}
                  onChange={(e) => handleChange('totalArea', e.target.value)}
                  required
                />
                {errors.totalArea && <span className="error">{errors.totalArea}</span>}
              </div>

            <div className="control-group">
              <label>No. of Floors</label>
              <select
                value={formData.floors}
                onChange={(e) => handleChange('floors', e.target.value)}
              >
                <option value="Ground">Ground</option>
                <option value="Ground + 1">Ground + 1</option>
                <option value="Ground + 2">Ground + 2</option>
                <option value="Ground + 3">Ground + 3</option>
                <option value="Ground + 4">Ground + 4</option>
              </select>
            </div>
            <div className="control-group">
              <label>Package</label>
              <select
                value={formData.package}
                onChange={(e) => handleChange('package', e.target.value)}
              >
                <option value="Basic Package @ 2099/sqft">
                  Basic Package @ ₹2099/sqft
                </option>
                <option value="Standard Package @ 2399/sqft">
                  Standard Package @ ₹2399/sqft
                </option>
                <option value="Premium Package @ 2599/sqft">
                  Premium Package @ ₹2599/sqft
                </option>
              </select>
            </div>
          </div>

          <div className="calculator-table">
            <div className="table-header">
              <div>Work</div>
              <div>Area</div>
              <div>Unit</div>
              <div>Rate</div>
              <div>Cost</div>
            </div>

            {/* Dynamic Floor Area Inputs */}
            {getFloorsToShow().map((floor) => (
              <div key={floor} className="table-row">
                <div>Enter required Built up Area for {getFloorLabel(floor)}</div>
                <div>
                  <input
                    type="number"
                    placeholder="Area in sqft"
                    value={formData[getFloorFieldName(floor)]}
                    onChange={(e) => handleChange(getFloorFieldName(floor), e.target.value)}
                  />
                </div>
                <div>sqft</div>
                <div>
                  Rs.{getPackageRate()}
                </div>
                <div>
                  Rs.{formData[getFloorFieldName(floor)]
                    ? (
                      parseInt(formData[getFloorFieldName(floor)], 10) * getPackageRate()
                    ).toLocaleString()
                    : 0}
                </div>
              </div>
            ))}

            {/* Water Sump */}
            <div className="table-row">
              <div>
                Size of RCC Water Sump (A 4 member family will require 10000 liter capacity)
              </div>
              <div>
                <input
                  type="number"
                  placeholder="No. of Liters"
                  value={formData.waterSump}
                  onChange={(e) => handleChange('waterSump', e.target.value)}
                />
              </div>
              <div>ltr</div>
              <div>Rs.35</div>
              <div>
                Rs.{' '}
                {formData.waterSump
                  ? (parseInt(formData.waterSump, 10) * 35).toLocaleString()
                  : 0}
              </div>
            </div>

            {/* Septic Tank */}
            <div className="table-row">
              <div>Size of Septic Tank (A 4 member family will require 10000 liter capacity)</div>
              <div>
                <input
                  type="number"
                  placeholder="No. of Liters"
                  value={formData.septicTank}
                  onChange={(e) => handleChange('septicTank', e.target.value)}
                />
              </div>
              <div>ltr</div>
              <div>Rs.20</div>
              <div>
                Rs.{' '}
                {formData.septicTank
                  ? (parseInt(formData.septicTank, 10) * 20).toLocaleString()
                  : 0}
              </div>
            </div>

            {/* Compound Wall */}
            <div className="table-row">
              <div>Compound Wall (5 ft)</div>
              <div>
                <input
                  type="number"
                  placeholder="Length"
                  value={formData.wallLength}
                  onChange={(e) => handleChange('wallLength', e.target.value)}
                />
              </div>
              <div>ft</div>
              <div>Rs.1850(1X5)</div>
              <div>
                Rs.{formData.wallLength
                  ? (
                    parseInt(formData.wallLength, 10) * 5 * 370
                  ).toLocaleString()
                  : 0}
              </div>
            </div>

            {/* Total */}
            {submitted && (
              <div className="table-total">
                <div></div>
                <div></div>
                <div></div>
                <div>
                  <strong>Total Construction Cost</strong>
                </div>
                <div>
                  <strong>Rs. {totalCost.toLocaleString()}</strong>
                </div>
              </div>
            )}
          </div>

          <motion.button
            type="submit"
            className="estimate-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!isFormValid}
          >
            GET FREE ESTIMATE NOW
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default CostCalculator;
