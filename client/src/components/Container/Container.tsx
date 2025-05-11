import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return <div className="mt-[115px] px-[30px] py-[30px]">{children}</div>;
};

export default Container;
