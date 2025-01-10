<script>
    const numbers = Array.from({ length: 7 }, (_, i) => i + 1);
    let name=""
    let password=""
    let passName="Aajneeti"
    let passPassword="Aajneeti@123"
    function check(){
        if (name===passName && password===passPassword) {
            console.log(`welcome ${name}`)
            window.location.href = "/dashboard";
        }
    }
</script>

<main class="login">
	<div class="wrapper">
		<h2>Login</h2>
		<form onsubmit={check}>
			<div class="input-box">
				<input type="text" bind:value={name} placeholder="Enter your username" required />
			</div>
			<div class="input-box">
				<input type="password" bind:value={password} placeholder="Create password" required />
			</div>

			<div class="input-box button">
				<input type="Submit" value="Register Now" />
			</div>
		</form>
	</div>
	<!-- animation -->
	<div class="animation-area">
		<ul class="box-area">
		{#each numbers as item}
            <li></li>
        {/each}
		</ul>
	</div>
</main>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}
	:global(body){
		margin: 0;
		padding: 0px;
	}
	:global(.login) {
		
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #4070f4;
	}

	.wrapper {
		position: relative;
		max-width: 430px;
		width: 100%;
		background: #fff;
		padding: 34px;
		border-radius: 6px;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	}
	.wrapper h2 {
		position: relative;
		font-size: 22px;
		font-weight: 600;
		color: #333;
	}
	.wrapper h2::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		height: 3px;
		width: 28px;
		border-radius: 12px;
		background: #4070f4;
	}
	.wrapper form {
		margin-top: 30px;
	}
	.wrapper form .input-box {
		height: 52px;
		margin: 18px 0;
	}
	form .input-box input {
		height: 100%;
		width: 100%;
		outline: none;
		padding: 0 15px;
		font-size: 17px;
		font-weight: 400;
		color: #333;
		border: 1.5px solid #c7bebe;
		border-bottom-width: 2.5px;
		border-radius: 6px;
		transition: all 0.3s ease;
	}
	.input-box input:focus,
	.input-box input:valid {
		border-color: #4070f4;
	}

	.input-box.button input {
		color: #fff;
		letter-spacing: 1px;
		border: none;
		background: #4070f4;
		cursor: pointer;
	}
	.input-box.button input:hover {
		background: #0e4bf1;
	}

	.animation-area {
		position: absolute;
		background: linear-gradient(to let, #00ffff, #1e90ff, #00bfff, #4b0082);
		width: 99%;
		height: 100%;
		z-index: -1;
		left: 10px;
        right: 0px;
		bottom: 0;
	}
	.box-area {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.box-area li {
		position: absolute;
		display: block;
		list-style: none;

		background: rgba(255, 255, 255, 0.2);
		animation: animate 30s linear infinite;
		bottom: -150px;
	}
	.box-area li:nth-child(1) {
		left: 0%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
	}
	.box-area li:nth-child(2) {
		left: 25%;
		width: 80px;
		height: 80px;
		animation-delay: 1.5s;
		animation-duration: 10s;
	}
	.box-area li:nth-child(3) {
		left: 50%;
		width: 80px;
		height: 80px;
		animation-delay: 5.5s;
	}
	.box-area li:nth-child(4) {
		left: 75%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
		animation-duration: 12s;
	}
	.box-area li:nth-child(5) {
		left: 78%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
	}
	.box-area li:nth-child(6) {
		left: 40%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
		animation-duration: 8s;
	}
	.box-area li:nth-child(7) {
		right: 25%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
	}
	.box-area li:nth-child(8) {
		right: 0%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
        animation-duration: 10s;
	}
	@keyframes animate {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 1;
		}
		100% {
			transform: translateY(-2800px) rotate(360deg);
			opacity: 0;
		}
	}
</style>
