export default function ContentTabAccordion({children, heading}) {
    return (
        <div className="collapse collapse-arrow bg-base-200 my-2">
            <input type="checkbox"/>
            <div className="collapse-title px-2">
                <h5 className="font-semibold">{heading}</h5>
            </div>
            <div className="collapse-content px-2">
                {children}
            </div>
        </div>
    )
}