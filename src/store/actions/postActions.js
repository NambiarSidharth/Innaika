import {ADD_POST} from './types';
import {GET_POST} from './types';
export const addPost = (data,userSession)=>dispatch=>{
    const options = { encrypt: false }
    userSession.putFile(`my_posts.json`, JSON.stringify(data), options)
    .then(obj=>{
        dispatch(postExec(data))
    })
}

export const retrPost = (userSession)=>dispatch=>{
    let posts;
    const options = { decrypt: false };
        userSession.getFile(`my_posts.json`, options)
        .then((content) => {
            console.log(content)
          if(content) {
            posts = JSON.parse(content)

          } else {
            posts =[] 
          }
          console.log(posts)
        dispatch(postExec(posts))
        }).catch(err=>{
            console.log(err)
        })
        
}

export const postExec = (data)=>{
    return {
        type:ADD_POST,
        payload:data
    }

}