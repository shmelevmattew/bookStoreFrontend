import { FC } from "react";
import Image from "next/image";

interface LogoProps {
    withName? : boolean
}

const Logo : FC<LogoProps> = ( props ) =>{
    const { withName } = props
    return (
        <>
            <Image src="/box.png" alt="box" width={90} height={50}/>
            
        </>
    )
}

export default Logo