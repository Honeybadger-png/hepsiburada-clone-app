import './topbar.css'
import NavigationData from "../../data/Navigation.json";
import { useEffect, useState } from 'react';
import ChildMenuCard from './child-menu-card';

const NavigationBar = () => {
    const [hoveredCategory, setHoveredCategory] = useState(-1);



    return (
        <div className="w-full">
            <div className="h-[55px] bg-shady-gray shadow justify-items-center">
                {
                    hoveredCategory !== -1 ? (
                        <div className='BackgroundShadow'></div>
                    ) : null
                }
                <div className=" relative w-[1200px] h-full">
                    <ul className="flex h-full text-[14px] font-[600]">
                        {
                            NavigationData.MainCategory.map((categories)=> {
                                return (
                                    
                                    <li className='flex h-full items-center px-[22px] hover:bg-white' key={categories.id} onMouseEnter={()=> setHoveredCategory(categories.id)} onMouseLeave={()=> setHoveredCategory(-1)}>
                                        <span>{categories.name}</span>   
                                    </li>
                                    
                                )
                            })
                        }
                        {
                            hoveredCategory !== -1 ? (
                                <ChildMenuCard key={hoveredCategory-1}  categories={NavigationData.MainCategory[hoveredCategory-1]} />
                            ) : null
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;