import BrandBar from "../components/BrandBar"
import './styles/Shop.scss'
import TypeBar from '../components/TypeBar'
import DeviceList from '../components/DeviceList'

export default function Shop() {
    return (
        <div className="shop-container">
            <TypeBar />
            <BrandBar />
            <DeviceList />
        </div>
    )
}
