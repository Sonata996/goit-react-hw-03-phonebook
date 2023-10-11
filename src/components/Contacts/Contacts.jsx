import {ContactList,ElemList,DeletButton } from "./contacts.styled"


export const Contacts = ({contact,onClickDelet}) =>{
    return(
        <div>
            <ContactList> 
               {contact.map(elem => <ElemList key={elem.id}>
                <p>
                    {elem.name}: {elem.number}
                </p>
                <DeletButton
                    id={elem.id}

                onClick={(elem)=>{
                    onClickDelet(elem.target.id)
                }}
                >
                    Delete</DeletButton>
               </ElemList>
                )}
            </ContactList>
        </div>
    )
}