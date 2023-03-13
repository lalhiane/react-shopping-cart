import { useEffect, useRef, useState } from "react";

import { fetchCategories } from "../../store/slices/categoriesSlice";

import { selectOneOption } from "../../store/slices/selectOptionSlice";

import { useAppDispatch, useAppSelector } from "../../store/store";

import Styles from "./sidebar.module.css";

const Categories = () => {
    
    const categories = useAppSelector(state => state.categories.categories);

    const dispatch = useAppDispatch();

    const [isOpen, setIsOpen] = useState(false);

    const option = useAppSelector(state => state.selectOption.option);

    // const [option, setOption] = useState("")

    const [highlightedIndex, setHighlightedIndex] = useState(0);

    const selectRef = useRef<HTMLDivElement>(null);

    const isOptionSelected = (selectedOption: string) => {

        return selectedOption === option;

    } 

    const handler = (e: KeyboardEvent) => {

        e.stopPropagation();

        if (e.target !== selectRef.current) return;

        switch (e.code) {
            
            case "Enter":
            case "Space":
                
                setIsOpen(prev => !prev);

                if (isOpen) selectOption(categories[highlightedIndex]);

                break;
            
            case "ArrowUp":
            case "ArrowDown":

                if (!isOpen) {

                    setIsOpen(true);

                    break;

                }

                let i = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);

                if (i >= 0 && i < categories.length) setHighlightedIndex(i);

                break;
            
            case "Escape":

                setIsOpen(false);

                break;

        }

    }

    const selectOption = (option: string) => {

        dispatch(selectOneOption(option));

    }

    useEffect(() => {

        dispatch(fetchCategories());

    }, []);

    useEffect(() => {

        selectRef.current?.addEventListener("keydown", handler);

        return () => selectRef.current?.removeEventListener("keydown", handler);

    }, [isOpen, highlightedIndex]);

    return (<div className={Styles.categories}>

        <h2 className={Styles["sidebar-title"]}>Categories</h2>

        <div
            
            ref={selectRef}
            
            tabIndex={0}
            
            className={Styles.select}

            onClick={_ => setIsOpen(prev => !prev)}

            onBlur={_ => setIsOpen(false)}
        
        >

            <div className={Styles["current-option"]}>{option ? option : "All"}</div>

            <span className={Styles.caret}></span>
            
            <ul className={`${Styles.options} ${isOpen ? Styles.show : ""}`}>{

                categories.map((category, index) => {

                    return (

                        <li
                            
                            key={category}
                            
                            className={`
                            
                                ${Styles.option}

                                ${isOptionSelected(category) ? Styles.selected : ""}

                                ${highlightedIndex === index ? Styles.highlight : ""}
                                
                            `}

                            onClick={e => {

                                e.stopPropagation();

                                selectOption(category);

                            }}

                            onMouseEnter={e => {

                                e.stopPropagation();

                                setHighlightedIndex(index);

                            }}
                        
                        >
                            
                            {category}
                        
                        </li>

                    );

                })
                
            }</ul>

        </div>

    </div>);

}

export default Categories;