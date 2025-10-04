import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/CostCalculator.css';

const CostCalculator = () => {
  const [formData, setFormData] = useState({
    floors: 'Ground',
    package: 'Basic Package @ 1999/sqft',
    builtUpArea: '',
    waterSump: '',
    septicTank: '',
    wallLength: '',
    wallHeight: '',
    name: '',
    phone: ''
  });

  const [totalCost, setTotalCost] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const calculateCost = (data) => {
    let cost = 0;

    if (data.builtUpArea) {
      const ratePerSqft = data.package.includes('1999') ? 1999 :
                          data.package.includes('2199') ? 2199 : 2499;
      cost += parseInt(data.builtUpArea) * ratePerSqft;
    }

    if (data.waterSump) {
      cost += parseInt(data.waterSump) * 24;
    }

    if (data.septicTank) {
      cost += parseInt(data.septicTank) * 24;
    }

    if (data.wallLength && data.wallHeight) {
      cost += parseInt(data.wallLength) * parseInt(data.wallHeight) * 425;
    }

    return cost;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name and phone
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number.');
      return;
    }

    const cost = calculateCost(formData);
    setTotalCost(cost);

    // Here you would implement actual sending email logic using backend or a service like EmailJS
    // For demonstration, we'll just show an alert
    alert(`Thank you, ${formData.name}! Your estimate request has been submitted.`);

    setSubmitted(true);
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
            </div>
            <div className="control-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                required
              />
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
              </select>
            </div>

            <div className="control-group">
              <label>Package</label>
              <select
                value={formData.package}
                onChange={(e) => handleChange('package', e.target.value)}
              >
                <option value="Basic Package @ 1999/sqft">
                  Basic Package @ ₹1999/sqft
                </option>
                <option value="Standard Package @ 2199/sqft">
                  Standard Package @ ₹2199/sqft
                </option>
                <option value="Premium Package @ 2499/sqft">
                  Premium Package @ ₹2499/sqft
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

            <div className="table-row">
              <div>Enter required Built up Area for Ground Floor</div>
              <div>
                <input
                  type="number"
                  placeholder="Area in sqft"
                  value={formData.builtUpArea}
                  onChange={(e) => handleChange('builtUpArea', e.target.value)}
                />
              </div>
              <div>sqft</div>
              <div>
                Rs.
                {formData.package.includes('1999')
                  ? '1999'
                  : formData.package.includes('2199')
                  ? '2199'
                  : '2499'}
              </div>
              <div>
                Rs.{' '}
                {formData.builtUpArea
                  ? (
                      parseInt(formData.builtUpArea) *
                      (formData.package.includes('1999')
                        ? 1999
                        : formData.package.includes('2199')
                        ? 2199
                        : 2499)
                    ).toLocaleString()
                  : 0}
              </div>
            </div>

            <div className="table-row">
              <div>
                Size of RCC Water Sump (A 4 member family will require 9000
                liter capacity)
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
              <div>Rs.24</div>
              <div>
                Rs.{' '}
                {formData.waterSump
                  ? (parseInt(formData.waterSump) * 24).toLocaleString()
                  : 0}
              </div>
            </div>

            <div className="table-row">
              <div>Size of Septic Tank</div>
              <div>
                <input
                  type="number"
                  placeholder="No. of Liters"
                  value={formData.septicTank}
                  onChange={(e) => handleChange('septicTank', e.target.value)}
                />
              </div>
              <div>ltr</div>
              <div>Rs.24</div>
              <div>
                Rs.{' '}
                {formData.septicTank
                  ? (parseInt(formData.septicTank) * 24).toLocaleString()
                  : 0}
              </div>
            </div>

            <div className="table-row">
              <div>Plain Compound Wall</div>
              <div className="wall-inputs">
                <input
                  type="number"
                  placeholder="Length"
                  value={formData.wallLength}
                  onChange={(e) => handleChange('wallLength', e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Height"
                  value={formData.wallHeight}
                  onChange={(e) => handleChange('wallHeight', e.target.value)}
                />
              </div>
              <div>sqft</div>
              <div>Rs.425</div>
              <div>
                Rs.{' '}
                {formData.wallLength && formData.wallHeight
                  ? (
                      parseInt(formData.wallLength) *
                      parseInt(formData.wallHeight) *
                      425
                    ).toLocaleString()
                  : 0}
              </div>
            </div>

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
          >
            GET FREE ESTIMATE NOW
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default CostCalculator;
