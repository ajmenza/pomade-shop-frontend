const ProductField = ({label, type, name}) => {
  return (
    
    <div className="product-field">
      <label className="pomade-label" htmlFor={name}>{label}</label>
      <input
        className="product-input"
        name={name}
        id={name}
        type={type}
      />
    </div>
  );
};

export default ProductField;
