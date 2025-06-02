
type ButtonProps = {
    text: string;
    onClick?: () => void;
    variant: 'primary' | 'secondary' //coloca o primary como valor padrão
}
export default function Button({text, variant = 'primary'}:ButtonProps){
    console.log(`${variant}`)

    const classVariant = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
    } 
    return(
        
        <button className={`btn ${classVariant[variant]}`}>
            {text}
        </button>
    )
}