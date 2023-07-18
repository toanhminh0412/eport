export function SuccessToast({message}) {
    return (
        <div className="toast toast-top toast-start z-50 top-32">
            <div className="alert alert-success">
                <span>{message}</span>
            </div>
        </div>
    )
}

export function ErrorToast({message}) {
    return (
        <div className="toast toast-top toast-start z-50 top-32">
            <div className="alert alert-error">
                <span>{message}</span>
            </div>
        </div>
    )
}