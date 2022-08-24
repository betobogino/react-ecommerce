import { IconWidgetMapPin } from "../IconWidget/IconWidgetMapPin";
import './AddressSend.css'

export const AddressSend = ({name, address}) => {
    return (
        <div className="address">
            <div className="address-icon" >
                <IconWidgetMapPin/>
            </div>
            <span className="address-name">Enviar a {name}</span>
            <span className="address-street">{address}</span> 
        </div>
    );
}