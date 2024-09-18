import { FC, ReactNode } from "react"

interface HeaderProps {
    logo : ReactNode
}

const Header : FC<HeaderProps> = (props) =>{

    const { logo } = props

    return (
        <div className="flex fixed top-0 border-lime-500 border-b-4 text-sm">
            {
                logo
            }
        </div>
    )
}

export default Header