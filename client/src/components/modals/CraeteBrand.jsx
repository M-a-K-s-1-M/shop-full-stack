import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import DeviceList from '../DeviceList';

const CreateBrand = () => (
    <Popup trigger={<button>Добавить бранд</button>} position="bottom left" modal='true' lockScroll='true'>
        {close => (
            <div>
                <button className="close" onClick={close}>
                    закрыть
                </button>
                <h2>Добавить бранд</h2>
                <input type='text' placeholder='brand' />
            </div>
        )}

    </Popup>
);

export default CreateBrand;