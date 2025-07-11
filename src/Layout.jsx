import { Routes, Route } from "react-router"
import { Navigation } from "./components/Nav/Navigation"
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator"
import { QrCodeScanner } from "./components/Scan/QrCodeScanner"


const Layout = () => {
    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
            </Routes>
        </div>
    )
}

export { Layout }