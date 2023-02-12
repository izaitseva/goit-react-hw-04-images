import React from 'react';
import { Grid } from 'react-loader-spinner';

export const Loader = () => {
    return (

        <div>
            <Grid
                height="80"
                width="80"
                radius="9"
                color="green" 
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </div>
    )
}