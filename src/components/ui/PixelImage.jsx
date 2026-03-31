import PixelTransition from "../animations/PixelTransition/PixelTransition";

const PixelImage = () => {
    return (
        <PixelTransition
            firstContent={
                <img
                    src="/images/me-kazuma.svg"
                    alt="ikzuu"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            }
            secondContent={
                <div
                    className="
                        grid
                        w-full
                        h-full
                        place-items-center
                        bg-light
                    "
                >
                    <p className="text-6xl text-accent font-bold">Hi!</p>
                </div>
            }
            gridSize={8}
            pixelColor='#78AEFF'
            animationStepDuration={0.4}
            className="custom-pixel-card"
        />
    );
};

export default PixelImage;