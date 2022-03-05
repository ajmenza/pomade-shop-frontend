const ProductField = ({label}) => {
  return (
    <>
      <label className="pomade-label" htmlFor="name">{label}</label>
      <input
        className="pomade-field"
        name="name"
        id="name"
        type="text"
      />
    </>
  );
};

export default ProductField;
