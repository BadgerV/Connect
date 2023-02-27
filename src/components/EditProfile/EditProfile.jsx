import { EditButton, EditButtonContainer, EditProfileContainer, EditProfileHeader, EditProfileInput, EditProfileInputCont, EditProfileLeft, EditProfileSmallerCont } from "./EditProfileStyle"
import { useState } from "react"


const EditProfile = ({setIsOpen, isOpen}) => {

    const [email, setEmail] = useState("SegunFaozan112@gmail.com")
    const [name, setName] = useState("Segunmaru Faozan")
    const [address, setAddress] = useState("No 23, Openifoluwa Street")
    const [phone, setPhone] = useState("+2348078752415")

  return (
    <EditProfileContainer>
        <EditProfileHeader>Edit Profile</EditProfileHeader>


        <EditProfileInputCont>
            <EditProfileSmallerCont>
                <EditProfileLeft>Email : </EditProfileLeft>
                <EditProfileInput type = "text" value = {email} />
            </EditProfileSmallerCont>

            <EditProfileSmallerCont>
                <EditProfileLeft>Name : </EditProfileLeft>
                <EditProfileInput type = "text" value = {name} />
            </EditProfileSmallerCont>

            <EditProfileSmallerCont>
                <EditProfileLeft>Phone Number : </EditProfileLeft>
                <EditProfileInput type = "text" value = {phone} />
            </EditProfileSmallerCont>
        </EditProfileInputCont>

        <EditButtonContainer>
            <EditButton onClick={() => setIsOpen(!isOpen)}>Back</EditButton>
            <EditButton>Submit</EditButton>
        </EditButtonContainer>
    </EditProfileContainer>
  )
}

export default EditProfile