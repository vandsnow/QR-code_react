import { Routes, Route } from "react-router"
import { Navigation } from "./components/Nav/Navigation"
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator"
import { QrCodeScanner } from "./components/Scan/QrCodeScanner"
import { GenerateHistory } from "./components/GenerateHistory"
import { ScanHistory } from "./components/ScanHistory"


const Layout = () => {
    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/generateHistory" element={<GenerateHistory />} />
                <Route path="/scanHistory" element={<ScanHistory />} />
            </Routes>
        </div>
    )
}

export { Layout }