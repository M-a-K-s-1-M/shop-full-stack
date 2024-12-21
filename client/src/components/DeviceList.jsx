import { useDeviceStore } from '../store/useDeviceStore'
import DeviceItem from './DeviceItem';

export default function DeviceList() {
    const { devices } = useDeviceStore();
    return (
        <div>
            {devices && devices.map((device) => {
                return (

                    <DeviceItem key={device.id} device={device} />
                )
            })}
        </div>
    )
}
