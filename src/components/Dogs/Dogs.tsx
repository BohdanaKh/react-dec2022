import {FieldValues, SubmitHandler, useForm} from "react-hook-form";

import {FC, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal} from "react";

interface IProps {
    stateDispatch: any
}

const Dogs: FC<IProps> = ({stateDispatch}) => {
    const {reset, register, handleSubmit} = useForm();
    const [{dogs}, dispatch] = stateDispatch;

    const saveDog: SubmitHandler<FieldValues> = (dog) => {
        dispatch({type: 'ADD_DOG', payload: dog})
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveDog)}>

                <input type="text" placeholder={'dog'} {...register('name')}/>
                <button>Save</button>
            </form>
            {dogs.map((dog: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => <div key={dog.id}>{dog.name} <button onClick={()=>dispatch({type:'DEL_DOG', payload:dog.id})}>Delete</button></div>)}        </div>
    );
};

export {Dogs};