export default function ContentTabAccordion({childrenHeading, childrenBody}) {
    return (
        <div className="collapse collapse-arrow bg-base-200 my-2">
            <input type="checkbox"/>
            <div className="collapse-title px-2">
                {childrenHeading}
            </div>
            <div className="collapse-content px-2">
                {childrenBody}
            </div>
        </div>
    )
}