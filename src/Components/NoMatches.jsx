export default function NoMatches ({text}) {
    return(
        <div>
            {
                text === '' ? <div className="list-item1"> Look something up</div > : <div className="list-item1"> There are no matches for your search</div>
            }
        </div>
        
    )
}