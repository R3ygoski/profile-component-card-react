export default function Infos({value, type}){
    return (
        <div>
            <p className="text-very-dark-desaturated-blue font-bold">{value}</p>
            <p className="text-xs text-dark-grayish-blue">{type}</p>
        </div>
    )
}