import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return <div className="mt-[134px]">{children}</div>;
};

export default Container;
