export default function SearchResult({title, link, snippet}){
    return <div className="h-20 border border-indigo-100 flex flex-row gap-2 mb-4 p-2">
        <div className="flex flex-col w-4/5">
            <span className="font-bold"> {title} </span>
            <span> {snippet} </span>
        </div>
        <div className="w-1/5 flex justify-center items-center">
            <a href={link} target="_blank" className="bg-indigo-500 hover:bg-indigo-600 text-xl text-white font-bold py-2 px-4 focus:outline-none focus:border-indigo-700 rounded-full"> Open </a>
        </div>
    </div>
}