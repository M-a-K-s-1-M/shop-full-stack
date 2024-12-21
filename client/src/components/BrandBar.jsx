import { useDeviceStore } from "../store/useDeviceStore"

export default function BrandBar() {
    const { brands, selectedBrand, setSelectedBrand } = useDeviceStore();
    return (
        <div className="brand-container">
            <ul className="brand-list">
                {brands && brands.map((brand) => {
                    return (
                        <li key={brand.id} className={`brand-item ${brand.id === selectedBrand.id && 'active'}`} onClick={() => { setSelectedBrand(brand) }}>{brand.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}
