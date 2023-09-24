
export default function UserProfile({params}: any) {
    return (
        <>
            <h1 className="text-dark m-4">This is the user profile <span className="text-light py-2 px-5 mx-2 bg-warning rounded-pill">{params.id}</span></h1>
        </>
    );
}