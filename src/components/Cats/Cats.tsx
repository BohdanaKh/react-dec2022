import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {FC, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal} from "react";


interface IProps {
    stateDispatch: any
}

const Cats: FC<IProps> = ({stateDispatch}) => {
    const {reset, register, handleSubmit} = useForm();
    const [{cats}, dispatch] = stateDispatch;

    const saveCat: SubmitHandler<FieldValues> = (cat) => {
        dispatch({type: 'ADD_CAT', payload: cat})
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveCat)}>
                <input type="text" placeholder={'cat'} {...register('name')}/>
                <button>save</button>
            </form>
            {cats.map((cat: { id: Key | null | undefined; name: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; })=><div key={cat.id}>{cat.name} <button onClick={()=>dispatch({type:'DEL_CAT', payload:cat.id})}>Delete</button></div>)}        </div>
    );
};

export {Cats};