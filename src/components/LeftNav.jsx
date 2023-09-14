import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
    const { selectCategory, setSelectCategory, mobileMenu } =
        useContext(Context);

    const navigate = useNavigate();

    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
                return setSelectCategory(name);
            case "home":
                return setSelectCategory(name);
            case "menu":
                return false;
            default:
                break;
        }
    };
        useEffect(() => {
            console.log(mobileMenu)
        })
    return (
        <div  
            className= {mobileMenu ? `md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute translate-x-0 md:relative z-10 transition-all` : 
            `md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all  translate-x-0 `}
        >
            <div className="flex px-5 flex-col">
                {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <LeftNavMenuItem
                                text={item.type === "home" ? "Home" : item.name}
                                icon={item.icon}
                                action={() => {
                                    clickHandler(item.name, item.type);
                                    navigate("/");
                                }}
                                className={`${selectCategory === item.name
                                        ? "bg-white/[0.15]"
                                        : ""
                                    }`}
                            />
                            {item.divider && (
                                <hr className="my-5 border-white/[0.2]" />
                            )}
                        </React.Fragment>
                    );
                })}
                <hr className="my-5 border-white/[0.2]" />
                <div className="text-white/[0.5] text-[12px]">
                    Clone by: Sipun
                </div>
            </div>
        </div>
    );
};

export default LeftNav;
