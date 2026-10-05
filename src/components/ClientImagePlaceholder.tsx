
interface ClientImagePlaceholderProps {
  id: string;
  label: string;
  aspectRatio?: string;
}

const ClientImagePlaceholder: React.FC<ClientImagePlaceholderProps> = ({ id, label, aspectRatio }) => {
  const style = aspectRatio ? { aspectRatio } : { height: '100%' };
  
  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', ...style }}>
      <div className="client-image-slot">
        <span>{label}</span>
        <p>/assets/client/{id}.jpg</p>
      </div>
    </div>
  );
};

export default ClientImagePlaceholder;
