<script lang="ts">
    import Modal from "./util/modal.svelte";
    let visible=true;
</script>
{#if visible}
    <Modal bind:visible={visible}>
        <h2>Edit Form</h2>
        <form>
          <input
            type="text"
            
            placeholder="Your Project"
            required
          />
          <input
            type="text"
            placeholder="Project URL"
            required
          />
        </form>
        <button>Update</button>
    </Modal>
{/if}