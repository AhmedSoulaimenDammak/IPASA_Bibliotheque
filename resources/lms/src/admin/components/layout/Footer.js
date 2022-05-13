import React from "react";
import PropTypes from "prop-types";

const TheFooter = ({ appName }) => {
    return (
        <>
            <div>
                <a
                    href="https://infyom.com"
                    target="_blank"
                    className="text-decoration-none footer-link"
                    rel="noopener noreferrer"
                >
                    {" "}
                    {appName}{" "}
                </a>{" "}
            </div>{" "}
            <div className="ms-auto">
                <span className="me-1"> Powered by </span>{" "}
                <a
                    href="https://coreui.io/react"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none footer-link"
                >
                    {" "}
                    CoreUI{" "}
                </a>{" "}
            </div>{" "}
        </>
    );
};

TheFooter.propTypes = {
    appName: PropTypes.string,
};

export default React.memo(TheFooter);
