
export const Water = ({waterLevel}) => {
    
    return (
        <div className="waterContainer">
            {[...Array(waterLevel)].map((_, i) => <div key={i} className="water"></div>)}
        </div>
    )
}