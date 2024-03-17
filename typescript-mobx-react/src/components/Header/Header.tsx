import React from "react";
import "./Header.css";

interface headerProps {
    todoCount: number;
}

export const Header: React.FC<headerProps> = ({todoCount}) => {
    return (
        <div className="header_container">
            Todo list
            <div className="header_title">
                Количество невыполненных задач: {todoCount}
            </div>
        </div>
    );
}