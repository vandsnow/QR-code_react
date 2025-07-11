import { Link } from "react-router";
import s from'./Navigation.module.css'

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to='/generate'>Generate QR-code</Link>
            <Link to='/scan'>Scan QR-code</Link>
            <Link to='/generateHistory'>Generate history</Link>
            <Link to='/scanHistory'>Scan history</Link>
        </nav>
    )
}