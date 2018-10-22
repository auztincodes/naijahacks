<template>
  <div>
      <aside>
    <header class="header fixed-top clearfix">
<!--logo start-->
<div class="brand">
   <router-link class="active" to="/dashboard"> <a class="logo">
      <div class="nav pull-left top-menu">
    <img src="../../../assets/images/Grudemy.png" id="newly1">
  </div>
    </a>
   </router-link>
    <!--<div class="sidebar-toggle-box">
        <div class="fa fa-bars"></div>
    </div>-->
</div>

<div class="top-nav clearfix">
	<!--search & user info start-->
	<!--<div class="nav pull-left top-menu">
		<img src="../../../assets/images/Grudemy.png" id="newly1">
	</div>-->
    <ul class="nav pull-right top-menu float-right">
        <!--<li>
            <input type="text" class="form-control search" placeholder=" Search">
        </li>-->
        <!-- user login dropdown start-->
       <li class="dropdown">
            <p data-toggle="dropdown" class="dropdown-toggle" href="#">Hi, Ify</p>
                <!--<img alt="" src="https://res.cloudinary.com/dt53xozy5/image/upload/v1539094813/2.png" id="newly2">-->
                <!--<h3 class="username">John Doe</h3>-->
                <b class="caret"></b>
            </a>
            <ul class="dropdown-menu extended logout">
				<li><a href=""><i class="fa fa-key"></i> Change Password</a></li>
                
                <li><a href="/Home" v-on:click="logout"><i class="fas fa-sign-out-alt"></i> Log Out</a></li>
            </ul>
        </li>
        <!-- user login dropdown end -->
       
    </ul>
    <!--search & user info end-->
</div>
</header>


<div id="sidebar" class="nav-collapse">
        <!-- sidebar menu start-->
        <div class="leftside-navigation">
            <ul class="sidebar-menu" id="nav-accordion">
                <li>
                     <router-link class="active" to="/dashboard/overview" exact>
                        <span>Software Development</span>
                        <i class="fas fa-comments"></i>
                    </router-link>
				</li>
				
				<li>
                    <router-link class="active" to="/dashboard/quotes">
                        <span>Design</span>
                        <i class="fas fa-comments"></i>
                     </router-link>
				</li>
				
				<li>
                     <router-link class="active" to="/dashboard/meetings">
                        <span>Poetry</span>
                        <i class="fas fa-comments"></i>
                       </router-link> 
				</li>
				
				<li>
                     <router-link class="active" to="/dashboard/application">
                        <span>Photography</span>
                        <i class="fas fa-comments"></i>
                     </router-link>
				</li>
				
				<li>
                    <router-link class="active" to="/dashboard/staff">
                        <span>Catering</span>
                        <i class="fas fa-comments"></i>
                    </router-link>
                </li>
                    <li>
                    <router-link class="active" to="/dashboard/staff">
                        
                        <span>Sport</span>
                        <i class="fas fa-comments"></i>
                    </router-link>
                </li>
                    <li>
                    <router-link class="active" to="/dashboard/staff">
                        <span>Medcine</span>
                        <i class="fas fa-comments"></i>
                    </router-link>
                </li>
                
                
            </ul>            </div>
        <!-- sidebar menu end-->
    </div>


      </aside>
  </div>


</template>

<script>
//import * as firebase from 'firebase' 
export default {
  name: 'aHeader',
  data () {
    return {
     
    }
  }
 
}
</script>

<style src="../Dashboard.css"></style>