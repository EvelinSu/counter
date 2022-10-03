import styled from "styled-components";
import {primaryColor} from "./components/Counter/styled";

export const SPageLoading = styled.div(props => ({
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2b3552",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,

}))

export const SWrapper = styled.div(props => ({
    backgroundColor: "#2b3552",
    display: "flex",
    justifyContent: "center",
    gap: 50,
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    color: "#fff",
    position: "relative",
    minWidth: 800,
}))

export const Flex = styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 10,
    margin: 10,
    border: `2px dashed ${primaryColor}`,
    borderRadius: 15,
}))

type TTextProps = {
    fontSize?: string | number
    isMaxValue?: boolean
}

export const Text = styled.span<TTextProps>(({isMaxValue, ...props}) => ({
    fontSize: props.fontSize,
    ...isMaxValue && {
        color: "#c97171",
        transition: "0.2s",
        transform: "scale(2)"
    }
}))

export const AbsoluteButton = styled.span((props) => ({
    opacity: 0.6,
    cursor: "pointer",
    position: "absolute",
    top: "80%",
}))