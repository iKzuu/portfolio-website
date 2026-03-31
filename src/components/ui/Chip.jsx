const Chip = ({text}) => {
    return (
        <div className="p-2 md:p-4 rounded-sm text-xs font-semibold bg-dark/60 backdrop-blur-sm shadow-accent-soft">
            <h3 className="text-md md:text-xl">{text}</h3>
        </div>
    );
}

export default Chip;