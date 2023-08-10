import { useContext } from "react";
import StackNavigation, { IStackNavigation } from "../../Components/StackNavigation";
import { ContextRegister, IContextRegister } from "./RegisterProvider";




export default function RegisterNavigation(props: Omit<IStackNavigation, "navigationContainerProps">): React.ReactElement{
    const {
        setPageIndex
    } = useContext<IContextRegister>(ContextRegister);

    return (
        <StackNavigation
            navigationContainerProps={{
                onStateChange: (state) => {
                    const index: number = (state?.index || 0) + 1;
                    setPageIndex(index);
                },
                independent: true
            }}
            {...props}
        />
    )
}