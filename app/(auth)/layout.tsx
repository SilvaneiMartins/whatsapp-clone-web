import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-6">
            {children}
        </div>
    );
}

export default AuthLayout;
