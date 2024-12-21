import { useState } from 'react'
import CreateType from '../components/modals/CreateType'
import CreateBrand from '../components/modals/CraeteBrand'
import CreateDevice from '../components/modals/CreateDevice'


export default function Admin() {
    const [isAddType, setIsAddType] = useState(false)
    return (
        <div>
            <CreateType />
            <CreateBrand />
            <CreateDevice />
        </div>
    )
}
