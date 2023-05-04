export const Registration = () => {
    return(
        
  <main>
  <h1 class="main">
    cloudlem </h1>
    <div class="div">
  <form action="../../postForm" method="post" className='form-group' ><div class="cc">
    <h2>Enter your data</h2>
    
    <h5 class="right">
      NAME: <input type="name" placeholder='enter your name' className='form-control'name="name" id="demo" ></input><br></br><br></br>
      FATHER NAME: <input type="name" placeholder='f-name' className='form-control' name="fname" id="fname" ></input><br></br><br></br>
      EMAIL : <input type="email"  placeholder='email' className='form-control' name="email" id="email"></input><br></br><br></br>
      DOB: <input type="date" placeholder='DOB'  className='form-control' name="date" id="date"></input><br></br><br></br>
      Adderss: <input type="adderss" placeholder='Asserss'  className='form-control' name="adderss" id="adderss"></input><br></br><br></br>
    
    </h5>
    </div>
    
  
    
    
  <button type="submit">save</button><br></br><br></br>
  </form>
  <a href ="https://cloudlem.com/">go to our website</a><br></br>
  </div>
  
  </main>
    );
};