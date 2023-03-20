
function Navbar() {
    return (
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Vehicles
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Drivers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Maintenance
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Trips
          </a>
        </li>
      </ul>
    );
}

export default Navbar
