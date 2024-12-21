import { useDeviceStore } from "../store/useDeviceStore";


export default function TypeBar() {
    const { types, setSelectedType, selectedType } = useDeviceStore()
    return (
        <div className="type-panel">
            <ul className="type-list">
                {types && types.map(type => {
                    return (
                        <li key={type.id} className={`type-item ${type.id === selectedType.id && "active"}`} onClick={() => { setSelectedType(type); console.log('click') }}>{type.name}</li>
                    )
                })}

            </ul>
        </div>
    )
}
