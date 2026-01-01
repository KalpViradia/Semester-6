export default async function UserDetails({params} : {params :{userId : string}}) {
    const {userId} = await params;
    
    return (
        <>
            <h1>User{userId}</h1>
        </>
    );
}