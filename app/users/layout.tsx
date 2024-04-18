import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

const UserLayout = ({ children }: Props) => {
    return (
        <div className="">
            {children}
        </div>
    )
}

export default UserLayout;
