import validate from "../common/validator";
import React from "react";
import {useForm} from "react-hook-form";


const HeaderForm = (props: any) => {
    const {id, firstName, lastName, phone, avaUrl} = (props)
    const {setFirstName, setLastName, setPhone, setAvaUrl, handleConfirm} = (props)
    const {register, handleSubmit, errors} = useForm();

    return (
        <div>

            <form id={"HeaderForm"} className={"submitForm"} onSubmit={handleSubmit(handleConfirm)}>
                <table>
                    <tr>
                        <th>#id</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Phone</th>
                        <th>PhotoURL</th>
                        <th>Actions</th>
                    </tr>


                    <tr>
                        <th>
                            <label>{id}</label>
                        </th>
                        <th>
                            <input value={firstName}
                                   onChange={(e) => {
                                       setFirstName(e.target.value)
                                   }}
                                   name="firstName"
                                   ref={register({required: true, maxLength: 80, minLength: 2})}/>

                            {errors.firstName ? (
                                <div>
                                    {validate(errors.firstName.type)}
                                </div>) : null}

                        </th>
                        <th>

                            <input value={lastName}
                                   onChange={(e) => {
                                       setLastName(e.target.value)
                                   }}
                                   type="text"
                                   name="lastName"
                                   ref={register({required: true, maxLength: 80, minLength: 2})}/>

                            {errors.firstName ? (
                                <div>
                                    {validate(errors.firstName.type)}
                                </div>) : null}

                        </th>
                        <th>
                            <input value={phone} onChange={(e) => {
                                setPhone(e.target.value)
                            }} type="phone" name="phone" ref={register}/>
                        </th>
                        <th>
                            <input value={avaUrl} onChange={(e) => {
                                setAvaUrl(e.target.value)
                            }} name="photoUrl" ref={register}/>
                        </th>

                        <th>
                            {id ? <button type={"submit"}>Update</button> : <button type={"submit"}>Create</button>}
                        </th>

                    </tr>
                </table>

            </form>
        </div>)
}
export default HeaderForm;
