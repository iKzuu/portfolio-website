const PixelText = ({children, clasName = ""}) => {
    const characters = children.split("");

    const shadowStyle = {
        textShadow: `
            -0.03em 0 0 #000, 0.03em 0 0 #000, 0 -0.03em 0 #000, 0 0.03em 0 #000,
            -0.03em -0.03em 0 #000, 0.03em -0.03em 0 #000, -0.03em 0.03em 0 #000, 0.03em 0.03em 0 #000,

            0.06em 0.06em 0 #000,
            0.07em 0.07em 0 #000,
            0.08em 0.08em 0 #000
        `
    };

    return (
        <span className={`flex flex-wrap justify-center ${clasName}`}>
            {characters.map((char, index) => (
                <span key={index} className="inline-block transition-all duration-200 hover:-translate-y-[0.1em] hover:brightness-110" style={shadowStyle}>
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </span>
    );
}

export default PixelText;