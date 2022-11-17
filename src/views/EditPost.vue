<template>
  <div class="container">
        <div class="col-md-6 offset-md-3">
            <h3>Editar Post</h3>
            <form>
                <div class="form-group">
                    <label for="postTitle">Título</label>
                    <input 
                        type="text"
                        class="form-control mb-2"
                        id="postTitle"
                        placeholder="Título..."
                    />
                </div>
                <div class="form-group">
                    <label for="postText">Texto</label>
                    <textarea class="form-control mb-2" id="postText"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Salvar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>