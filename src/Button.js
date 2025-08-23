export default function Button({ children, onClick, type = "button", className = "", disabled}) {
    return (
        <button onClick={onClick} type={type} className={className} disabled={disabled}>
            {children}
        </button>
    );
}