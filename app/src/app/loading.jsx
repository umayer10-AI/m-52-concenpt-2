import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div>
            <div className='flex justify-center my-20'>
                <Spinner size="xl" />
            </div>
        </div>
    );
};

export default loading;