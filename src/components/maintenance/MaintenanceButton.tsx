
interface Props {
  children: string;
  className?: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
  onClick: () => void;
}

const MaintenanceButton = ({ children, className, color = 'primary', onClick }: Props) => {
  return (
    <button className={className + ' btn btn-' + color + ' btn-outline-light'} onClick={onClick}>{children}</button>
  )
}

export default MaintenanceButton