import PixelTransition from "../animations/PixelTransition/PixelTransition";

const PixelImage = () => {
    return (
        <PixelTransition
            firstContent={
                <img
                    src="/images/ikzuu.png"
                    alt="ikzuu"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            }
            secondContent={
                // <div
                //     style={{
                //         width: "100%",
                //         height: "100%",
                //         display: "grid",
                //         placeItems: "center",
                //         backgroundColor: "#f6f6f6"
                //     }}
                // >
                //     <p style={{ fontWeight: 900, fontSize: "3rem", color: "#78AEFF" }}>iKzuu!</p>
                // </div>
                <img
                    src="/images/icon/github-mark.svg"
                    alt="github"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            }
            gridSize={24}
            pixelColor='#78AEFF'
            animationStepDuration={0.4}
            className="custom-pixel-card"
        />
    );
};

export default PixelImage;