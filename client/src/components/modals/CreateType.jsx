import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import DeviceList from '../DeviceList';

const CreateType = () => (
    <Popup trigger={<button>Добавить тип</button>} position="bottom left" modal='true' lockScroll='true'>
        {close => (
            <div>
                <button className="close" onClick={close}>
                    закрыть
                </button>
                <h2>Добавить тип</h2>
                <input type='text' placeholder='type' />
            </div>
        )}

    </Popup>
);

export default CreateType;