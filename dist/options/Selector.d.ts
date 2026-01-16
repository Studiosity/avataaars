import * as React from 'react';
import Option from './Option';
export interface Props {
    option: Option;
    defaultOption: React.ComponentClass | string;
    children?: React.ReactNode;
}
export default function Selector({ option, defaultOption, children }: Props): import("react/jsx-runtime").JSX.Element;
