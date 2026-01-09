import React, { useState, useContext } from "react";
import { BoxContext } from "../../context/BoxContext";
import { SHIPPING_RATES } from "../../constants";
import styles from "./AddBox.module.css";

function AddBox() {
  const { addBox } = useContext(BoxContext);

  const [formData, setFormData] = useState({
    receiverName: "",
    weight: "",
    boxColour: "#000000",
    destinationCountry: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);
      return `${r}, ${g}, ${b}`;
    }
    return "0, 0, 0";
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.receiverName.trim()) {
      newErrors.receiverName = "Receiver name is required";
    }

    if (formData.weight === "" || formData.weight === null) {
      newErrors.weight = "Weight is required";
    } else if (parseFloat(formData.weight) <= 0) {
      newErrors.weight = "Weight must be greater than 0";
    }

    if (!formData.destinationCountry) {
      newErrors.destinationCountry = "Please select a destination country";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "weight") {
      if (parseFloat(value) < 0) {
        setFormData((prev) => ({ ...prev, [name]: 0 }));
        setErrors((prev) => ({
          ...prev,
          weight: "Negative values are not permitted. Field defaulted to zero.",
        }));
        return;
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    const boxData = {
      receiverName: formData.receiverName.trim(),
      weight: parseFloat(formData.weight),
      boxColour: hexToRgb(formData.boxColour),
      destinationCountry: formData.destinationCountry,
    };

    addBox(boxData);

    setFormData({
      receiverName: "",
      weight: "",
      boxColour: "#000000",
      destinationCountry: "",
    });

    setSuccessMessage("Box added successfully!");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add New Box</h1>

      {successMessage && (
        <div className={styles.successMessage}>{successMessage}</div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="receiverName">Receiver Name</label>
          <input
            type="text"
            id="receiverName"
            name="receiverName"
            value={formData.receiverName}
            onChange={handleInputChange}
            placeholder="Enter receiver name"
          />
          {errors.receiverName && (
            <span className={styles.error}>{errors.receiverName}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            placeholder="Enter weight in kilograms"
            step="0.01"
          />
          {errors.weight && (
            <span className={styles.error}>{errors.weight}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="boxColour">Box Colour</label>
          <div className={styles.colorPickerWrapper}>
            <input
              type="color"
              id="boxColour"
              name="boxColour"
              value={formData.boxColour}
              onChange={handleInputChange}
            />
            <span className={styles.colorValue}>
              RGB({hexToRgb(formData.boxColour)})
            </span>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="destinationCountry">Destination Country</label>
          <select
            id="destinationCountry"
            name="destinationCountry"
            value={formData.destinationCountry}
            onChange={handleInputChange}
          >
            <option value="">Select a country</option>
            {Object.entries(SHIPPING_RATES).map(([key, country]) => (
              <option key={key} value={key}>
                {country.name} (₹{country.rate} per box)
              </option>
            ))}
          </select>
          {errors.destinationCountry && (
            <span className={styles.error}>{errors.destinationCountry}</span>
          )}
        </div>

        <button type="submit" className={styles.submitBtn}>
          Save Box
        </button>
      </form>
    </div>
  );
}

export default AddBox;
