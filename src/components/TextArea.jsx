import Proptype from 'prop-types';

TextArea.propTypes = {
    label: Proptype.string,
    name: Proptype.string,
    value: Proptype.string,
    onChange: Proptype.func,
    placeholder: Proptype.string
};

export default function TextArea({ label, name, value, onChange, placeholder }) {
    return (
        <label className="w-full max-w-lg form-control">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <textarea defaultValue={value} onChange={onChange} name={name} className="h-24 max-w-lg textarea textarea-bordered" placeholder={placeholder}></textarea>
        </label>
    )
}