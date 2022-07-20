import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import RenderCampsite from '../features/campsites/RenderCampsite';

const CampsiteInfoScreen = (props) => {
    return <RenderCampsite campsite={props.campsite}/>;
}

export default CampsiteInfoScreen;