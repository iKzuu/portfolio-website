const Chip = ({children}) => {
    return (
        <div className="p-2 md:p-4 rounded-sm text-xs font-semibold bg-dark/60 backdrop-blur-sm shadow-accent-soft">
            {children}
        </div>
    );
}

export default Chip;