import { Link } from "react-router";



export const Navigation = () => {
    return (
        <nav style={{display:'flex', flexDirection:'column'}}>
            <Link to='/generate'>Generate QR-code</Link>
            <Link to='/scan'>Scan QR-code</Link>
            <Link to='/'>Generate history</Link>
            <Link to='/'>Scan history</Link>
        </nav>
    )
}