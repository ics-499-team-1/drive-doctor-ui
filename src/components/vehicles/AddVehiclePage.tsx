import axios from "axios";
import { useState } from "react";
import authHeader from "../../models/auth/AuthHeader";
import { GetToken, GetUserId } from "../../services/LocalStorageService";
import { useNavigate } from "react-router-dom";
import checkLogin from "../../hooks/checkLogin";

interface FormValues {
  [key: string]: string | undefined | boolean | null;
  name: string;
  year: string;
  make: string;
  model: string;
  trim: string;
  odometer: string;
  license_plate?: string;
  vin?: string;
  deactivated: boolean;
  user_id: string | null;
}

function AddVehiclePage() {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    year: "",
    make: "",
    model: "",
    trim: "",
    odometer: "",
    license_plate: "",
    vin: "",
    deactivated: false,
    user_id: GetUserId(),
  });

  const navigate = useNavigate();
  // check login
  checkLogin();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formValues.name !== "" && formValues.model !== "") {
      try {
        await axios
          .post(
            `http://localhost:8080/drive-doctor/v1/vehicles`,
            formValues,
            authHeader(GetToken())
          )
          .then(() => navigate("/vehicles"));
      } catch (error) {
        console.error(error);
      }
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
  ];

  return (
    <form onClick={handleSubmit}>
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
