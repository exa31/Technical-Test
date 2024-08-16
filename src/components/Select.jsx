import proptype from 'prop-types';

Select.propTypes = {
    label: proptype.string,
    name: proptype.string,
    options: proptype.array,
    value: proptype.object,
    onChange: proptype.func,
};

export default function Select({ label, name, options, value, onChange }) {
    return (
        <>
            <label className="w-full max-w-lg form-control">
                <div className="label">
                    <span className="label-text">{label}</span>
                </div>
                <select onChange={onChange} name={name} defaultValue={!value ? label : value.name} className="select select-bordered">
                    <option disabled>{label}</option>
                    {options.map((option, index) => (
                        < option key={index} value={option.name} > {option.name}</option>
                    ))}
                </select >
            </label >
        </>
    )
}