import React from "react";
import {isObject} from "../../../misc/typeChecking";

const PropertyField = ({name, content}) => {
    return (
        <div
            style={{
                overflowWrap: "anywhere",
                overflow: "none",
                paddingTop: "15px",
                paddingBottom: "10px",
                borderBottom: "1px solid #ccc",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                fontSize: "16px",
                fontWeight: 400
            }}
        >
            <div style={{
                fontSize: "16px",
                fontWeight: 600,
                maxWidth: "330px",
                minWidth: "330px",
            }}
            >
                {name}
            </div>
            <div>
                {content && React.isValidElement(content)
                    ? content
                    : isObject(content) || content === "" || !content
                        ? '<empty>'
                        : content}
            </div>
        </div>
    );
}

export default PropertyField;