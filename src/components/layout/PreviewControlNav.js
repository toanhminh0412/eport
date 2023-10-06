export default function PreviewControlNav() {
    return (
        <div className="navbar bg-neutral text-neutral-content py-3 fixed top-18 z-30">
            <div className="navbar-start w-full flex-wrap gap-2">
                <button className="btn btn-sm xs:btn">Preview</button>
                <button className="btn btn-sm xs:btn">Publish</button>
            </div>
        </div>
    )
}