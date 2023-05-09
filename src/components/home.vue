<template> 
  <div>    
    <h1>Welcome to Aisyah Website</h1> 
    <p>Mari melihat apa saja kegiatan anda :)</p> 
    <center><router-link to="/kegiatan" class="nav-link"> 
      To do list 
    </router-link></center>
  </div> 
</template> 
 
<script> 
import { RouterLink } from 'vue-router'; 
 
export default { 
  name: 'Home', 
  components:{ 
    RouterLink 
  } 
} 
</script> 
 
<style> 
.nav-link { 
  display: inline-block; 
  padding: 0.5rem 1rem; 
  background-color: #4CAF50; 
  color: white; 
  text-decoration: none; 
  border-radius: 0.25rem; 
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
} 
 
h1 { 
  font-size: 3rem; 
  text-align: center; 
  margin-top: 3rem; 
} 
 
p { 
  font-size: 1.5rem; 
  text-align: center; 
  margin-top: 2rem; 
} 
</style>