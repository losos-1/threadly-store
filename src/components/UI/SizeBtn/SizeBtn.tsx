import classNames from 'classnames';
import './SizeBtn.scss'

type SizeBtnProps = {
    name:string;
    onSelect:(type:string) => void;
    isActive:boolean;
}
export default function SizeBtn({
    name,
    isActive,
    onSelect
}:SizeBtnProps){

    return(
        <button 
            className={classNames('size-button',{'size-button--active' : isActive})}
            type='button'
            onClick={() => onSelect(name)}
            aria-label={name}
            aria-pressed={isActive}
        >
            {name}
        </button>
    )
}