import { Text } from 'react-native';
import { ReactNode } from 'react';

type TxtProps = {
    children: ReactNode;
    className?: string;
};

export function Txt({ children, className = "" }: TxtProps) {
    return (
        <Text className={`text-white ${className}`}>
            {children}
        </Text>
    );
}
