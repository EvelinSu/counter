import styled, {keyframes} from "styled-components";
import {TSCounterBoardProps} from "./types";

export const primaryColor = "#4e7fc0"

export const SCounter = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${primaryColor}`,
    borderRadius: 15,
    width: 230,
}))

export const SCounterBoard = styled.div<TSCounterBoardProps>(({isMaxCount}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    textAlign: "center",
    borderRadius: 15,
    margin: "10px 10px 0 10px",
    height: 150,
    backgroundColor: primaryColor,
    "input": {
        width: 50,
        textAlign: "center",
        height: 30,
        borderRadius: 10,
        border: "none",
        "&:focus": {
            outline: "2px solid rgba(0, 0, 0, 0.4)",
        }
    }
}))

export const SCounterBoardRows = styled.div<TSCounterBoardProps>(({invalidValue, ...props}) => ({
    display: "flex",
    alignItems: "center",
    padding: 10,
    gap: 20,
    ...invalidValue && {
        input: {
            border: "1px solid #ec4f4f",
            backgroundColor: "#ef8383",

        }
    }

}))