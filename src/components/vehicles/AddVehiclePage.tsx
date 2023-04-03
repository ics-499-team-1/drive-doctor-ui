import axios from "axios";
import { useState } from "react";

interface FormValues {
  [key: string]: string | undefined | boolean;
  name: string;
  year: string;
  make: string;
  model: string;
  trim: string;
  odometer: string;
  license_plate?: string;
  vin?: string;
  deactivated: boolean;
  user_id: string;
}

function AddVehiclePage() {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    year: "",
    make: "",
    model: "",
    trim: "",
    odometer: "",
    license_plate: undefined,
    vin: undefined,
    deactivated: false,
    user_id: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/drive-doctor/v1/vehicles",
        formValues
      );
      console.log("Vehicle added successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const formElements = [
    { placeholder: "Name", id: "name", type: "text" },
    { placeholder: "Year", id: "year", type: "number" },
    { placeholder: "Make", id: "make", type: "text" },
    { placeholder: "Model", id: "model", type: "text" },
    { placeholder: "Trim", id: "trim", type: "text" },
    { placeholder: "Mileage", id: "odometer", type: "number" },
    {
      placeholder: "License Plate (Optional)",
      id: "license_plate",
      type: "text",
    },
    { placeholder: "VIN # (Optional)", id: "vin", type: "text" },
    { placeholder: "User ID #", id: "user_id", type: "number" },
  ];

  return (
    <form onSubmit={handleSubmit}>
      {formElements.map((element) => (
        <div className="mb-3" key={element.id}>
          <input
            id={element.id}
            type={element.type}
            className="form-control"
            placeholder={element.placeholder}
            onChange={handleChange}
            value={formValues[element.id]}
          />
        </div>
      ))}
      <button className="btnSubmit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default AddVehiclePage;
