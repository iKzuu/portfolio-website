const Lightbar = () => {
    return (
        <div className="z-30 absolute top-0 left-1/2 -translate-x-1/2 w-[260px] pointer-events-none">
            <div className="
                absolute top-0 left-1/2 -translate-x-1/2
                w-[120%] h-[300px]
                blur-[120px]
                rounded-full
            "></div>

            <div className="
                absolute inset-0
                h-[180px]
                bg-gradient-to-b from-accent/40 to-transparent
                blur-[80px]
                opacity-60
            "></div>

            <div className="
                absolute inset-0
                h-[40px]
                bg-accent
                blur-3xl
                opacity-70
            "></div>

            <div className="
                relative
                h-[8px]
                bg-accent
                shadow-[2px_4px_60px_#74AEFF]
            "></div>
        </div>
    );
}

export default Lightbar;