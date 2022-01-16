const HeaderLinks = ({title, active}) => {
    return (
        <div>
            <span className={`uppercase text-sm text-white font-semibold cursor-pointer ${active && 'text-teal-900'}`}>
                {title}
            </span>
            
        </div>
    )
}

export default HeaderLinks
