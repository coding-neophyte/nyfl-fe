import superagent from 'superagent';


export async function signUp(name, email){
    const response = await superagent.post('https://nyfl.herokuapp.com/api/v1/users').send({ name, email });

    return response.body;
}
