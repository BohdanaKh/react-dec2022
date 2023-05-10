import {FC} from 'react';

import {CarForm, Cars} from '../components';
import {useAppSelector} from '../hooks';

const CarPage: FC = () => {

    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarPage};