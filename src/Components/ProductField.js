const ProductField = ({label, type, name}) => {
  return (
    
    <>
      <label className="pomade-label" htmlFor={name}>{label}</label>
      <input
        className="pomade-field"
        name={name}
        id={name}
        type={type}
      />
    </>
  );
};

export default ProductField;
