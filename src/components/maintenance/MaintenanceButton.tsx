
interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
  onClick: () => void;
}

const MaintenanceButton = ({ children, color = 'primary', onClick }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default MaintenanceButton