import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { useDeviceStore } from '../../store/useDeviceStore';
import { useState } from 'react';

const CreateDevice = () => {
    const { devices, types, brands } = useDeviceStore();
    const [info, setInfo] = useState([]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt);
    }

    const addInfo = (evt) => {
        evt.preventDefault();
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }


    return (
        <Popup trigger={<button>Добавить девайс</button>} position="bottom left" modal='true' lockScroll='true'>
            {close => (
                <div>
                    <button className="close" onClick={close}>
                        закрыть
                    </button>
                    <h2>Выберите тип</h2>
                    <form onSubmit={handleSubmit}>
                        <select>
                            {types.map((type) => {
                                return (
                                    <option key={type.id} value={type.id}>{type.name}</option>
                                )
                            })}
                        </select>

                        <select>
                            {brands.map((brand) => {
                                return (
                                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                                )
                            })}
                        </select>
                        <input type='text' placeholder='Введите название устройства' />
                        <input type='number' placeholder='Введите стоимость устройства' />
                        <input type='file' />

                        <button type="button" onClick={addInfo}>Добавить свойство</button>

                        {info.length && info.map(i => {
                            <div key={i.number}>
                                <input type='text' placeholder='Введите название свойства' />
                                <input type='text' placeholder='Введите описание свойства' />
                                <button>Удалить</button>
                            </div>
                        })}

                        <button>Добавить</button>
                    </form>
                </div>
            )}

        </Popup>
    )
}


export default CreateDevice;