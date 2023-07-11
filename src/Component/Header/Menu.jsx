import React, { useEffect, useState } from "react";
import "./Menu.css";
const something = [
    {
        id: 1,
        main: "home",
        isActive: false,
        options: [
            { menu: "home1", path: "/menus" },
            { menu: "home2", path: "/ijk" },
            { menu: "home3", path: "" },
            { menu: "home4", path: "" },
        ],
    },
    {
        id: 2,
        main: "pages",
        isActive: false,
        options: [
            { menu: "page1", path: "/bcd" },
            { menu: "page2", path: "" },
            { menu: "page3", path: "" },
            { menu: "page4", path: "" },
        ],
    },
    {
        id: 3,
        main: "services",
        isActive: false,
        options: [
            { menu: "service1", path: "/efg" },
            { menu: "service2", path: "" },
            { menu: "service3", path: "" },
            { menu: "service4", path: "" },
        ],
    },
    {
        id: 4,
        main: "case",
        isActive: false,
        options: [
            { menu: "case1", path: "/efg" },
            { menu: "case2", path: "" },
            { menu: "case3", path: "" },
            { menu: "case4", path: "" },
        ],
    },
    {
        id: 5,
        main: "article",
        isActive: false,
        options: [
            { menu: "article1", path: "/efg" },
            { menu: "article2", path: "" },
            { menu: "article3", path: "" },
            { menu: "article4", path: "" },
        ],
    },
    {
        id: 6,
        main: "Contact",
        isActive: false,
    },
];

function Menu() {
    const [menus, setMenus] = useState(something);
    const path = window.location.pathname;

    const handleOpena = (index) => {
        const isOpen = menus.findIndex((item) => item.isActive === true);
        console.log(isOpen);
        let newArr = [...menus];
        newArr[index].isActive = true;
        if (isOpen !== -1) {
            newArr[isOpen].isActive = false;
        }
        setMenus(newArr);
    };

    return (
        <div className="mobile-side-menu">
            {menus.map((item, index) => (
                <div key={index}>
                    <h3
                        className="main-menu"
                        onClick={() => handleOpena(index)}
                    >
                        {item.main}
                    </h3>
                    {
                        item.options &&
                        (
                            <div className={`menu ${item.isActive ? "active" : " "}`}>
                                {item.options.map((opt, ind) => (
                                    <p
                                        key={ind}
                                        className={
                                            opt.path === path ? "active" : ""
                                        }
                                    >
                                        {opt.menu}
                                    </p>
                                ))}
                            </div>
                        )
                    }
                </div>
            ))}
        </div>
    );
}
export default Menu;