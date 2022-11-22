import {useLoadScript} from '@react-google-maps/api'
import { Map } from './Map';
import { GOOGLE_MAP_API_KEY } from './GoogleMapApiKey'

export const Dashboard = (props) => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: GOOGLE_MAP_API_KEY,
        libraries:['places'],
    });

    if (!isLoaded)return <div>Loading...</div>;
    return (
        <div>
            <h1>
                <span style={{color:'#1419A1'}}>
                    <b>Get Q'd!</b>
                </span>
            </h1>
            {/* <=== map component ===> */}
            <div>
                <Map/>
            </div>
            
            {/* <=== toggle button ===> */}
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>

            {/* <div className="form-Box">
                <div className="button-box"></div>
                <button type="button">Today</button>
                <button type="button">Tomorrow</button>
            </div> */}
        </div>
    )




}