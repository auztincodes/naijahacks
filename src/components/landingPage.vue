<template>
  <div class="hello">
    <!-- header -->
	<header>
		<nav class="navbar navbar-expand-lg navbar-light py-4">
			<div class="container">
				<h1>
					<a class="navbar-brand" href="">
						<img src="../assets/images/Grudemy.png">
					</a>
				</h1>
				<button class="navbar-toggler ml-md-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
				    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">

					<ul class="navbar-nav mx-auto text-center">
						<li class="nav-item active">
							<a class="nav-link" href="">Meet a Tutor
								<span class="sr-only">(current)</span>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link scroll" href="">Study Groups</a>
						</li>

						<li class="nav-item">
							<a class="nav-link scroll" href="">Network</a>
						</li>
					</ul>
					<div class="forms-w3ls-agilesm text-center mt-lg-0 mt-4">
						<ul>
							<li class="login-list-w3ls d-inline border-right pr-3 mr-3">
								<a href="#" class="text-white" data-toggle="modal" data-target="#exampleModalCenter1">Sign In</a>
							</li>
							<li class="login-list-w3ls d-inline">
								<a href="#" class="text-white" data-toggle="modal" data-target="#exampleModalCenter2">Join for Free</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	</header>
	<!-- login -->
	<div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header text-center">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="login px-sm-4 mx-auto mw-100">
						<h5 class="text-center mb-4">Login Now</h5>
						<form action="#" method="post">
							<div class="form-group">
								<label>Your Name</label>
								<input type="text" class="form-control" name="name" placeholder="" required="">
							</div>
							<div class="form-group">
								<label class="mb-2">Password</label>
								<input type="password" class="form-control" name="password" placeholder="" required="">
							</div>
							<button type="submit" class="btn btn-primary submit mb-4">Login</button>
							<p class="text-center pb-4">
								<a href="#">Forgot your password?</a>
							</p>
							<p class="text-center pb-4 create-w3ls">
								Don't have an account?
								<a href="#" data-toggle="modal" data-target="#exampleModalCenter2">Create one now</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- //login -->
	<!-- register -->
	<div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header text-center">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="login px-sm-4 mx-auto mw-100">
						<h5 class="text-center mb-4">Register Now</h5>
						<form action="#" method="post">
							<div class="form-group">
								<label>Your Name</label>
								<input type="text" class="form-control" name="name" placeholder="" required="">
							</div>
							<div class="form-group">
								<label>Email</label>
								<input type="email" class="form-control" name="email" placeholder="" required="">
							</div>
							<div class="form-group">
								<label class="mb-2">Password</label>
								<input type="password" class="form-control" name="password" id="password1" placeholder="" required="">
							</div>
							<div class="form-group">
								<label>Confirm Password</label>
								<input type="password" class="form-control" name="password" id="password2" placeholder="" required="">
							</div>
							<button type="submit" class="btn btn-primary submit mb-4">Register</button>
							<p class="text-center pb-4">
								<a href="#">By clicking Register, I agree to your terms</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- //register -->
	<!-- //header -->

	<!-- banner -->
	<div class="callbacks_container">
		<ul class="rslides" id="slider3">
			<li>
				<div class="slider-info bg1">
					<div class="w3l-overlay">
						<div class="banner-text text-center container">
							<h3 class="text-white mb-md-4 mb-3">Peer-Peer Collaborative Learning
							</h3>
							<p class="movetxt text-white mb-4">Grow your business through the top freelancing website. Hire experts from the U.S. or worldwide.</p>
							<div class="search-agile">
								<form action="#" method="post">
									<input type="search" name="search" placeholder="Find a study group close to you..." required="">
									<input type="submit" value="Search">
									<div class="clearfix"> </div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</li>
			
		</ul>
	</div>

	<!-- //banner -->
	<div class="container intro_text">

  <div class="row">
  <div class="col-md-6 offset-md-3 text-center mt-5 pb-4">
    <h3 class=" my-4 heading">How It Works</h3>
  </div>
</div>
</div>
	<section class="tools_intro ">
  <div class="container text-center pt-5">
<div class="row ">
	<div class="col-md-1"></div>
  <div class=" mb-4 col-md-3 effect1 py-5 mx-4">
    <img src="../assets/images/file.png" alt="" class="mb-4 tools-icon " />
    <h5>
      <strong>Find Study Group</strong>
    </h5>
    <p class="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci enim, posuere sed tincidunt et, pellentesque eget mi.
    </p>

  </div>

  <div class=" mb-4 col-md-3 effect1 py-5 mx-4">
    <img src="../assets/images/connect.png" alt="" class="mb-4 tools-icon" />
    <h5>
      <strong>Join a Group</strong>
    </h5>
    <p class="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci enim, posuere sed tincidunt et, pellentesque eget mi.
    </p>
  </div>

  <div class=" mb-4 col-md-3 effect1 py-5 mx-4">
    <img src="../assets/images/chat.png" alt="" class="mb-4 tools-icon" />
    <h5>
      <strong>Collaborate and Learn</strong>
    </h5>
    <p class="text-center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci enim, posuere sed tincidunt et, pellentesque eget mi.
    </p>
  </div>
</div>

</div>
</section>

<section class="about">
		<div class="container-fluid">
			<div class="row">
					<div class="col-lg-12 d-flex flex-row about-info">
					<div class="col-lg-6">
					<h3 class="tittle text-left mb-lg-5 mb-3">Share, work and succeed with learners just like you.</h3>
					<p class="my-xl-4 my-lg-3 my-md-4 my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
						dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
						book.
					</p>

					<button type="button" class="btn btn-primary btn-lg float-left">Get Started</button>
				</div>
				
				<div class="col-lg-6 p-0">
					<img src="../assets/images/undraw.png" alt="Realtie" class="img-fluid" />
				</div>

			</div>
				
			
		</div>
		</div>
	</section>
	<div class="copy_right">
			<p class="text-center text-white py-sm-4 py-3">Copyright © 2018 Grudemy| All rights reserved
			</p>

		</div>
	                            
	
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-3{
	text-align: left;
}
.effect1{
	border: 1px solid #e5e5e5;
    -webkit-box-shadow: 0 10px 6px -10px #777;
       -moz-box-shadow: 0 10px 6px -10px #777;
            box-shadow: 0 10px 6px -10px #777;
}
.p-0 img{
	width: 350px !important;
  height: 250px !important;
}
.btn-primary {
    color: #fff;
    background-color: #5AD147;
    border-color: #5AD147;
}
.copy_right p {
    background: rgba(63, 61, 86);
    letter-spacing: 2px;
}
</style>
