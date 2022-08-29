import React, {FC} from 'react';
import {TButtonProps} from "./types";
import {SButton} from "./styled";

const Button: FC<TButtonProps> = ({label, callback, isDisabled, ...props}) => {
    const onClickHandler = () => callback && callback()

    return (
        <SButton disabled={isDisabled} onClick={onClickHandler}>
            {label}
        </SButton>
    );
};

export default Button;