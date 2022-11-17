<template>
  <div class="postList">
    <h3>Posts</h3>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    Primeiro Post do Blog
                    <span class="badge badge-primary badge-pill">
                      <router-link :to="{ path: `/editpost/identificador` }" class="btn btn-primary">Editar</router-link>
                      <a href="#" class="btn btn-danger">Apagar</a>
                    </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
</script>

<style>

</style>