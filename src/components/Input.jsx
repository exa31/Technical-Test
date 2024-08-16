import PropTypes from 'prop-types';

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Menggunakan oneOfType untuk dua tipe
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Menggunakan oneOfType untuk dua tipe
    onChange: PropTypes.func,
};

export default function Input({ label, name, type, placeholder, value, onChange }) {
    return (
        <label className="w-full max-w-lg form-control">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input type={type} min={0} onChange={onChange} placeholder={placeholder} defaultValue={value} name={name} className="w-full max-w-lg input input-bordered" />
        </label>
    );
}