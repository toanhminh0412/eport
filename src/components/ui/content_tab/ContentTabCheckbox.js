export default function ContentTabCheckbox({ label, content, onChange }) {
    return (
        <div className="form-control py-2">
            <label className="flex flex-row gap-2">
                <input type="checkbox" checked={content ? "checked" : ""} className="checkbox" onChange={onChange}/>
                <span className="label-text my-auto" dangerouslySetInnerHTML={{__html: label}}/> 
            </label>
        </div>
    )
}