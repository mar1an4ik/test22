import {useQuery} from 'react-query'
import {addClient, getClients, updateClient} from "../api/api";
import React, {useState} from "react";

import HeaderForm from "./HeaderForm";
import UsersForm from "./UsersForm";


function Users() {
    const [id, setId] = useState(null)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [avaUrl, setAvaUrl] = useState("")

    const [pageNumber, setPageNumber] = useState(1);

    const {isLoading, error, data, refetch} = useQuery("key", getClients, {});

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const setLocalData = (firstName: string, lastName: string, phone: string, avatarUrl: string) => {
        setFirstName(firstName);
        setLastName(lastName)
        setPhone(phone)
        setAvaUrl(avatarUrl)
    }


    const handleConfirm = (data2: any) => {

        setLocalData(data2.firstName, data2.lastName, data2.phone, data2.avatarUrl)
        if (!id) {
            addClient(firstName, lastName, phone, avaUrl).then(() => refetch()) //Add Users
        } else {
            // @ts-ignore
            updateClient(id, firstName, lastName, phone, avaUrl).then(() => refetch()) // Update User
            setId(null)

        }
        setLocalData("", "", "", "")
    };

    const paginate=(array: any, page_size: number = 40, page_number: number = pageNumber)=> {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }


    return (
        <>
            <HeaderForm handleConfirm={handleConfirm}
                        firstName={firstName}
                        lastName={lastName}
                        phone={phone}
                        avaUrl={avaUrl}
                        id={id}
                        setFirstName={setFirstName}
                        setLastName={setLastName} setPhone={setPhone} setAvaUrl={setAvaUrl}
            />

            <UsersForm data={data}
                       setLastName={setLastName}
                       setPhone={setPhone}
                       setFirstName={setFirstName}
                       setId={setId}
                       setAvaUrl={setAvaUrl}
                       paginate={paginate}
                       pageNumber={pageNumber}
                       setPageNumber={setPageNumber}/>
        </>
    )
}

export default Users;
