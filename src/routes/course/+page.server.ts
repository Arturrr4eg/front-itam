import { fail, message, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import type { Actions } from './$types';

const colors = ["red", "black", "blue"];

const schema = z.object({
  name: z.string().min(1).default('Hello world!'),
  email: z.string().email(),
  color: z.enum(colors).array().min(1).default([colors[0]])
});


export const load  = async({params}) =>{
    const form = await superValidate(zod(schema));

    return { form };
}
export const actions: Actions = {
    default: async ({request}) => {
        const form = await superValidate(request,zod(schema));
        if (form.data.name == ""){
            setError(form, "name", "имя не должно быть пустым");
            return fail(400,{form});
        } 
    
        return message(form, "Molodec");
    }
}