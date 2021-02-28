import React from "react";


const UsersForm = (props: any) => {
    const {data} = (props)
    const {setFirstName, setLastName, setPhone, setAvaUrl, setId} = (props)
    const {pageNumber, setPageNumber, paginate} = (props)

    return (
        <form id={"UsersForm"}>
            <table className={"usersForm"}>
                <tr>
                    <th>id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Phone</th>
                    <th>Photo</th>
                    <th>Actions</th>

                </tr>


                {data ? paginate(data.getClients.reverse().map((element: any) => {
                    return (<tr>
                        <td>{element.id}</td>
                        <td>{element.firstName}</td>
                        <td>{element.lastName}</td>
                        <td>{element.phone}</td>

                        <td>
                            <img src={element.avatarUrl}/></td>
                        <td>
                            <button onClick={(e) => {
                                setId(element.id);
                                setFirstName(element.firstName);
                                setLastName(element.lastName)

                                setPhone(element.phone)
                                setAvaUrl(element.avatarUrl)
                                e.preventDefault()
                            }}>Edit
                            </button>
                        </td>
                    </tr>)
                })) : <div>Loading</div>}
            </table>

            <div className={"paginator"}>
                <button onClick={(e) => {
                    if (pageNumber != 1) setPageNumber((prevNumber: number) => --prevNumber)
                    e.preventDefault()
                }}>Previous
                </button>

                <span className="m-5 text-2xl ">{pageNumber}</span>

                <button onClick={(e) => {
                    setPageNumber((prevNumber: number) => ++prevNumber)
                    e.preventDefault()
                }}>Next
                </button>
            </div>
        </form>
    )
}


export default UsersForm;
