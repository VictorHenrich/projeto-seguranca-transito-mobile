import { 
    Heading, 
    IHeadingProps
} from 'native-base';


export default function HeadingDefault(props: IHeadingProps){

    return (
        <Heading
            color="#a6a6a6"
            fontWeight={700}
            fontSize={25}
            display="inline"
            {...props}
        />
    )
}