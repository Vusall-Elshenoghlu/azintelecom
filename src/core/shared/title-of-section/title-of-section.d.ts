import React from 'react';

interface TitleOfSectionProps {
    title?: string;
    description?: string;
    line?: boolean;
    dark? : boolean;
    children?: React.ReactNode;
}