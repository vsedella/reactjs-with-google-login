export default function UserInfo({email, name , picture}){
    return <div className="items-center justify-center flex mt-5 flex-col gap-1">
    <p className="font-bold"> Hello {name}</p>
    <p>{email}</p>
    <img src={`${picture}`} className="rounded-full"></img>
  </div>
}