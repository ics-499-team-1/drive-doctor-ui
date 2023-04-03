function AddVehiclePage() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="year" className="form-label">
          Year
        </label>
        <input id="year" type="number" className="form-control" />
      </div>
      <button className="btnSubmit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default AddVehiclePage;
