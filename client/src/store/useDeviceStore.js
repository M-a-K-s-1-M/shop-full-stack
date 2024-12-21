import { create } from 'zustand';

const useDeviceStore = create((set) => ({
    types: [
        { id: 1, name: 'Холодильники' },
        { id: 2, name: 'Смартфоны' },
        { id: 3, name: 'Ноутбуки' },
        { id: 4, name: 'Телевизоры' },
    ],
    brands: [
        { id: 1, name: "Sumsung" },
        { id: 2, name: "Apple" },
        { id: 3, name: "Lenovo" },
        { id: 4, name: "Asus" }
    ],
    devices: [
        {
            id: 1,
            name: "9 max pro",
            price: 110000,
            rating: 1,
            img: "a65ce80f-2bb3-4442-b055-a9c9ae63634d.jpg",
            createdAt: "2024-12-21T05:39:17.523Z",
            updatedAt: "2024-12-21T05:39:17.523Z",
            typeId: 1,
            brandId: 6
        },
        {
            id: 2,
            name: "9 max pro",
            price: 110000,
            rating: 2,
            img: "a65ce80f-2bb3-4442-b055-a9c9ae63634d.jpg",
            createdAt: "2024-12-21T05:39:17.523Z",
            updatedAt: "2024-12-21T05:39:17.523Z",
            typeId: 1,
            brandId: 6
        },
        {
            id: 3,
            name: "9 max pro",
            price: 110000,
            rating: 3,
            img: "a65ce80f-2bb3-4442-b055-a9c9ae63634d.jpg",
            createdAt: "2024-12-21T05:39:17.523Z",
            updatedAt: "2024-12-21T05:39:17.523Z",
            typeId: 1,
            brandId: 6
        },
        {
            id: 4,
            name: "9 max pro",
            price: 110000,
            rating: 4,
            img: "a65ce80f-2bb3-4442-b055-a9c9ae63634d.jpg",
            createdAt: "2024-12-21T05:39:17.523Z",
            updatedAt: "2024-12-21T05:39:17.523Z",
            typeId: 1,
            brandId: 6
        },

    ],

    selectedType: {},
    selectedBrand: {},

    setTypes: (types) => set({ types }),
    setBrands: (brands) => set({ brands }),
    setDevices: (device) => { set({ device }) },
    setSelectedType: (selectedType) => { set({ selectedType }) },
    setSelectedBrand: (selectedBrand) => { set({ selectedBrand }) }
}));

export { useDeviceStore };
