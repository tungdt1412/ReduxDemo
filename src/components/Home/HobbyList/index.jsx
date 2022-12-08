import React from "react";
import "./HobbyList.css";

function HobbyList(props) {
    const { hobbyList, activeId, onHobbyClick } = props;

    const handleClick = (hobby) => {
        if (onHobbyClick) {
            onHobbyClick(hobby);
        }
    };

    return (
        <ul className="hobby-list">
            {hobbyList.map((item) => (
                <li
                    key={item.id}
                    className={item.id === activeId ? "active" : ""}
                    onClick={() => handleClick(item)}
                >
                    {item.title}
                </li>
            ))}
        </ul>
    );
}

export default HobbyList;
