

const SwimLane = () => {

    const dummyProductsData = [
        {id:1, src: "/image/ex-picture.png"},
        {id:2, src: "/image/ex-picture.png"},
        {id:3, src: "/image/ex-picture.png"},
        {id:4, src: "/image/ex-picture.png"},
        {id:5, src: "/image/ex-picture.png"},
        {id:6, src: "/image/ex-picture.png"},
        {id:7, src: "/image/ex-picture.png"},
        {id:8, src: "/image/ex-picture.png"},
        {id:9, src: "/image/ex-picture.png"},
        {id:10, src: "/image/ex-picture.png"},
        {id:11, src: "/image/ex-picture.png"},
        {id:12, src: "/image/ex-picture.png"}
    ]

    return(
        <div className="flex gap-6">
            {
                dummyProductsData.map((product)=> {
                    return(
                        <div key={product.id}>
                            <a href="">
                                <div className="h-[90px] w-[90px]">
                                    <img src={product.src} alt="" />
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SwimLane;