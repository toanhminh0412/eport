// Local imports
import socialIcons from "@/data/social-icons";

export default function ContentTabSocial({ content, onChange, onDelete=null }) {
    const {social, href} = content;

    return (
        <div className="bg-white rounded-md shadow-lg border border-slate-300 duration-150 py-4 px-3 my-3 relative">
            {/* Text */}
            <div className="form-control w-full">
                <label className="pt-0">
                    <span className="label-text text-slate-500">Social Media</span>
                </label>
                <select className="select border border-neutral w-full max-w-xs"
                    name="option"
                    value={social}
                    onChange={onChange}>
                    {Object.keys(socialIcons).map((key, socialIndex) => (
                        <option key={`${key}-${socialIndex}`} value={key}>{key}</option>
                    ))}
                </select>
            </div>

            {/* Link */}
            <div className="form-control w-full mt-2">
                <label>
                    <span className="label-text text-slate-500">Link</span>
                </label>
                <input 
                    type="text" 
                    name="link"
                    placeholder="Heading link" 
                    className="input input-sm border border-neutral w-full" 
                    value={href}
                    onChange={onChange}/>
            </div>
        </div>
    )
}