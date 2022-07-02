import React from 'react'
import styled from 'styled-components'
import { Button } from "@mui/material";
import COLORS from '../../constants/colors'

const StyledButton = styled(Button)<{color?: "primary" | "secondary", filled?: boolean}>`
    border-radius: 15px !important;
    background-color: ${props => props.color === "secondary" ? COLORS.secondary : COLORS.primary} !important;
    color: ${props => props.color === "secondary" ? COLORS.primary : "white"} !important;
`

export default StyledButton