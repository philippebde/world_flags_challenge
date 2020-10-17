<template>
 <div>
		<div class="filters">
			<router-link to="/" tag="button" class="btn">
				<i class="fas fa-arrow-left"></i>Back
			</router-link>
		</div>
		<div class="blocks country">
      <div>
        <div class="left">
          <div class="flag" :style="{'background-image':'url(./src/assets/one-way.jpg)'}"></div>
        </div>
        <div class="right">
          <div class="info">
            <h2>Are you lost?</h2>
            <div class="flex w-100">
              <div class="w-100">
                <span>We all lose our way sometimes.</span>
              </div>
              <div class="w-100">
                <span>It seems the page you're looking for doesn't exist.</span>
              </div>
              <div class="w-100">
                <span><strong>Try returning home.</strong></span>
              </div>
              <div class="w-100">
                <router-link to="/" tag="button" class="btn"><i class="fas fa-home"></i> HOME</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style></style>