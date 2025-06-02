import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

type PlantIconProps = {
    size?: 'sm' | 'md' | 'lg'
}

export default function PlantIcon ({size = 'md'}: PlantIconProps){
    const fontSize = {
        sm: 'small',
        md: 'medium',
        lg: 'large',
    } as const;

    return(
        <LocalFloristIcon  fontSize={fontSize[size]}/>
    )
}