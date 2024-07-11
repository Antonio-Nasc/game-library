import PropTypes from "prop-types";
TextInput.PropTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};
export default function TextInput({ id, label, value, setValue }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor={id} style={{ marginBottom: '8px' }}>{label}</label>
      <input
        name={id}
        type="text"
        id={id}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        style={{ padding: '8px', fontSize: '16px' }}
      />
    </div>
  );
}
