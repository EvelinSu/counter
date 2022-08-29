import styled from "styled-components";
import {TSButtonProps} from "./types";
import {primaryColor} from "../Counter/styled";

export const SButton = styled.button<TSButtonProps>(({disabled}) => ({
    padding: "5px 15px",
    backgroundColor: primaryColor,
    borderRadius: 10,
    outline: "none",
    width: "100%",
    border: "none",
    fontSize: "inherit",
    color: "inherit",
    cursor: "pointer",
    transition: "0.2s",
    ...disabled && {
        pointerEvents: "none",
        opacity: 0.3,
        display: "flex",
        justifyContent: "center",
    },
    "&:hover": {
        transform: "scale(0.9)",
    },
    "&:active": {
        transform: "scale(0.9) translateY(3px)",
    }
}))