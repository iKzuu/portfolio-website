import PixelTransition from "../animations/PixelTransition/PixelTransition";

const PixelImage = () => {
    return (
        <PixelTransition
            firstContent={
                <img
                    src="/images/front_image.png"
                    alt="ikzuu"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            }
            secondContent={
                <img
                    src="/images/back-image.png"
                    alt="github"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            }
            gridSize={16}
            pixelColor='#78AEFF'
            animationStepDuration={0.4}
            className="custom-pixel-card"
        />
    );
};

export default PixelImage;