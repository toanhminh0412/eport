// Local imports
import EditableLink from "./EditableLink"

export default function EditableField({ type, content, position, className }) {
    switch (type) {
        case "link":
            return <EditableLink content={content} position={position} className={className}/>
    }
}