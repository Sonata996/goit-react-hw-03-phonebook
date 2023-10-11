import { ConteinerFilter,InputFilterStyled } from "./inputFilter.styled"


export const InputFilter = ({tilteInput,onAddFilter}) =>{
    return (
        <ConteinerFilter>
                <label htmlFor="filters">{tilteInput}</label>
                <InputFilterStyled 
                    name='filters'
                    type="text" 
                    onChange={(value)=> onAddFilter(value.target.value)}
                    
                    />
            </ConteinerFilter>
    )
}