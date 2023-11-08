
import './Assets/css/Style.css';

const App=()=>
{
      return(
        <div className='kavi'>
        <h1 className='hi'>APPLICATION </h1>
        <form className='hii'>
  
            <input  className='aa' id='name' type='text' placeholder='Enter your name' ></input>
         
             <input className='aa'id='email' type='email' placeholder='Enter your email'></input>
            
            <input className='aa' id='pho' type='number' placeholder='Phone num' ></input>
           
             <input className='aa' id='user' type='text' placeholder='Username' ></input>
            
             <input className='aa' id='poss' type='password' placeholder='Password' ></input>
             
             <input type='submit' className='xx' value='Register'></input>
        </form>
        </div>
      )
}
export default App;