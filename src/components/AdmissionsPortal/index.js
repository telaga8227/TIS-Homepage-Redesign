import React, { useState } from 'react';
import './index.css';

export default function AdmissionsPortal() {
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', classTarget: '', stateOrigin: '' });

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="apply-portal" className="admissions-section">
            <div className="portal-grid">
                <div className="portal-contact-card">
                    <h2>Contact Us</h2>
                    <hr className="divider-bar" />
                    <p className="contact-item">📍 <strong>Campus Address:</strong><br />Tula's International School, Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)</p>
                    <p className="contact-item">📧 <strong>Email Communications:</strong><br />info@tis.edu.in</p>
                    <p className="contact-item">📞 <strong>Landline Systems:</strong><br />0135-2699444, 0135-2699666</p>
                </div>

                <div className="portal-form-card">
                    <h3>Trust to impart education through seamless opportunities.</h3>
                    <form className="core-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="name" placeholder="Enter your Full Name..." onChange={handleInput} required />
                        <input type="email" name="email" placeholder="Enter Email Id (Optional)..." onChange={handleInput} />

                        <div className="input-row-phone">
                            <span className="prefix-badge">+91</span>
                            <input type="tel" name="mobile" placeholder="Enter your Mobile No..." onChange={handleInput} required />
                        </div>

                        <select name="classTarget" onChange={handleInput} required>
                            <option value="">Select Target Class</option>
                            <option value="Class VI">Class VI</option>
                            <option value="Class VII">Class VII</option>
                            <option value="Class VIII">Class VIII</option>
                            <option value="Class IX">Class IX</option>
                            <option value="Class XI">Class XI</option>
                        </select>

                        <select name="stateOrigin" onChange={handleInput} required>
                            <option value="">Select State</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Other">Other</option>
                        </select>

                        <label className="checkbox-agreement">
                            <input type="checkbox" required />
                            <span>I agree to receive transactional updates regarding my registration profile details.</span>
                        </label>

                        <button type="submit" className="form-submit-btn">Enquire Now!</button>
                    </form>
                </div>
            </div>
        </section>
    );
}