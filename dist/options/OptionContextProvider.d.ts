import * as React from 'react';
import OptionContext from './OptionContext';
declare const OptionContextReactContext: React.Context<OptionContext>;
export declare const OptionContextProvider: React.FC<{
    optionContext: OptionContext;
    children: React.ReactNode;
}>;
export declare const useOptionContext: () => OptionContext;
export default OptionContextReactContext;
