import PhoneGestureBar from "./PhoneGestureBar";
import PhoneStatusBar from "./PhoneStatusBar";

const MobileDemo = ({
  demoUrl,
  projectName,
}) => {
  return (
    <div className="device-scale">
      <div className="device-phone">
        <div className="device-island" />

        <div className="device-screen">
          <PhoneStatusBar />

          <div className="device-app">
            <iframe
              src={demoUrl}
              title={`${projectName} mobile demo`}
              className="
                block
                h-full
                w-full
                border-0
                bg-white
              "
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <PhoneGestureBar />
        </div>
      </div>
    </div>
  );
};

export default MobileDemo;