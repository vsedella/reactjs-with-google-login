export default function SearchResult({title, link, htmlSnippet}){
    return <div className="h-20 border border-indigo-100 flex flex-row gap-2 mb-4 p-2">
        <div>
            <span> {title} </span>
            <span> {htmlSnippet} </span>
        </div>
        <div>
            <a href={link} target="_blank"> Open </a>
        </div>
    </div>
}