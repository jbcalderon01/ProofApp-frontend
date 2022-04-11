import React, { FC, useState } from 'react'

import { InputHelperText, InputLabel, InputLabelWrapper } from '../InputField/styled'

import { ArrowIcon, CheckIcon, Input, InputSearchWrapper, OptionText, OptionWrapper, PopupWrapper, Wrapper } from './styled'
import { TInputSearch } from './types'

export const InputSearch: FC<TInputSearch> = ({
    labelSize ='default',
    label,
    helperText
}) => {

    const [isOpenPopup, setIsOpenPopup] = useState(false)

    return (
        <InputSearchWrapper>
            { label && <InputLabelWrapper>
                <InputLabel
                    size={labelSize}
                >
                    {label}:
                </InputLabel>
                {helperText && <InputHelperText> {helperText}</InputHelperText>}
            </InputLabelWrapper>}
            <Wrapper>
                <Input
                    onBlur={() => setIsOpenPopup(false)}
                    onFocus={() => setIsOpenPopup(true)}
                />

                <ArrowIcon
                    active={isOpenPopup}
                    icon="angle-down"
                />
            </Wrapper>
            {isOpenPopup && <PopupWrapper>
                <OptionWrapper>
                    <OptionText>
                            Options
                    </OptionText>
                    <CheckIcon icon="check"/>
                </OptionWrapper>
                <OptionWrapper selected>
                    <OptionText>
                            Options
                    </OptionText>
                    <CheckIcon icon="check"/>
                </OptionWrapper>
            </PopupWrapper>}
        </InputSearchWrapper>
    )
}
