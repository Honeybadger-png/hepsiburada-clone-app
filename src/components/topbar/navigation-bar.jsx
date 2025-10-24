import './topbar.css'
import NavigationData from "../../data/Navigation.json";
import { useEffect, useState } from 'react';

const NavigationBar = () => {
    const [hoveredCategory, setHoveredCategory] = useState(-1);


    useEffect(()=> {
        console.log(NavigationData);
    })

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
                                    <>
                                        <li className='flex h-full items-center px-[22px] hover:bg-white' key={categories.id} onMouseEnter={()=> setHoveredCategory(categories.id)} onMouseLeave={()=> setHoveredCategory(-1)}>
                                            <span>{categories.name}</span>   
                                        </li>

                                            {
                                                hoveredCategory !== -1 ? (
                                                    <div className="ChildMenuItems">
                                                        <div className='flex pt-8'>
                                                            <div className='w-2/10 min-h-[300px] bg-amber-600 px-4'>
                                                                <ul>
                                                                    <li>Bilgisayar/Tablet</li>
                                                                </ul>
                                                            </div>
                                                            <div className='w-8/10 min-h-[300px]'>

                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : null
                                            }


                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;