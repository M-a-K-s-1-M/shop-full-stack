import { Navigate, useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts'

export default function DeviceItem({ device }) {
    const navigate = useNavigate()
    return (
        <div className="device-container" onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
            <img src={device.img} width='150' />
            <div>
                <div>Samsung</div>
                <div>
                    <div>{device.rating}</div>
                </div>
            </div>
        </div>
    )
}
