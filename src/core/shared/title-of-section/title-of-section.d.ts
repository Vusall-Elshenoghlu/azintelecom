import React from 'react';

interface TitleOfSectionProps {
    title?: string;
    description?: string;
    line?: boolean;
    dark? : boolean;
    isIcon? : boolean;
    underline? : boolean;
    children?: React.ReactNode;
}