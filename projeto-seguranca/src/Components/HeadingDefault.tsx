import { 
    Heading, 
    IHeadingProps
} from 'native-base';


export default function HeadingDefault(props: IHeadingProps){

    return (
        <Heading
            color="#FFFFFF"
            fontWeight={700}
            fontSize={25}
            {...props}
        />
    )
}