import { MdKeyboardArrowRight } from "react-icons/md";
import { IconContext } from "react-icons";


const ChildMenuCard = ({categories}) => {

    console.log(categories.children)
    return (

        <div className="ChildMenuItems">
            <div className='flex pt-8'>
                <div className='w-2/10 min-h-[300px]'>
                    <ul className="pl-4">
                        {
                          categories.children.map((subCategory)=> {
                            return (
                                <li className="pt-2 flex justify-between items-center">
                                    <p>
                                        {subCategory.name}
                                    </p>
                                    <IconContext.Provider value={{className: "text-[24px]"}}>
                                        <p>
                                            <MdKeyboardArrowRight />
                                        </p> 
                                    </IconContext.Provider >
                                </li>
                            )
                          })   
                        }
                    </ul>
                </div>
                <div className='w-8/10 min-h-[300px]'>

                </div>
            </div>
        </div>
    )
}

export default ChildMenuCard;