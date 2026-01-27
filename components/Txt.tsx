import { Text, TextProps } from "react-native";
import { ReactNode } from "react";

type TxtProps = TextProps & {
    children: ReactNode;
    className?: string;
};

export function Txt({ children, className, style, ...rest }: TxtProps) {
    return (
        <Text{...rest} className={`text-white ${className}`} style={style}>
            {children}
        </Text>
    );
}
