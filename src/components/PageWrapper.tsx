import React, {FC, ReactNode} from 'react';
import {Box} from "@mui/material";

interface IPageWrapperProps {
    children: ReactNode;
}

const PageWrapper: FC<IPageWrapperProps> = ({children}) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            {children}
        </Box>
    );
};

export default PageWrapper;