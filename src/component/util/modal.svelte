<script>
    export let visible=false;
    function close(){
        visible=false;
    }
</script>
<div class="modal-bg" onclick={close}>
    <div class="modal" onclick={(event) => event.stopPropagation()}>
     <slot/>
    </div>
</div>
<style>
    
    .modal-bg{
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0,0.4);
    }
    .modal{
        background-color: aliceblue;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }
</style>