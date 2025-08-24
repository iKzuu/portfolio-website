const { motion } = require("framer-motion");

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-light" : "text-semi-light";

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-light ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className="h-1 bg-custom-color mt-2 mr-3 rounded-md"
            >
            </motion.div>
        </button>
    );
};

export default TabButton;