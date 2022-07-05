<script lang="ts">
</script>

<!-- create login page using daisy ui-->
<div class="bg-no-repeat bg-cover bg-center relative transition-all duration-300">
	<div class="sm:flex sm:flex-row mx-0 justify-center">
		<div class="flex-col lg:flex hidden self-center p-10 sm:max-w-5xl xl:max-w-2xl">
			<div class="prose lg:prose-xl self-start flex flex-col">
				<!-- <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> -->
				<h1 class="mb-3 font-bold text-5xl">Hola, Bienvenido de vuelta</h1>
				<p class="pr-3">Por favor inicia session para comenzar su dia, recuerda que de ti depende nuestro succeso</p>
			</div>
		</div>
		<div class="card card-compact p-4 bg-base-300 mx-8 shadow-xl ">
			<div class="card-body">
				<div class="mb-4">
					<h3 class="card-title">Sign In</h3>
					<p>Please sign in to your account.</p>
				</div>
				<div class="space-y-5">
					<div class="form-control w-full">
						<label class="input-group my-4">
							<span class="w-24 bg-base-100">Email</span>
							<input type="text" placeholder="info@site.com" class="input input-bordered" />
						</label>
					</div>
                    <div class="form-control w-full">
						<label class="input-group mb-4">
							<span class="w-24 bg-base-100">Password</span>
							<input type="password" placeholder="* * * * * * * *" class="input input-bordered" />
						</label>
					</div>
					<div class="flex items-center justify-between">
						<div class="flex items-center">
							<input id="remember_me" name="remember_me" type="checkbox" class="checkbox" />
							<label for="remember_me" class="ml-2 block text-sm "> Remember me </label>
						</div>
						<div class="text-sm">
							<a href="" class=" "> Forgot your password? </a>
						</div>
					</div>
					<div>
						<button type="submit" class="flex justify-center w-full btn btn-primary mt-8"> Sign in </button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
