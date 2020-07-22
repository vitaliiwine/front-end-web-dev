<template>
    <div class="d-flex flex-column chat-wrap">
        <div class="chat-window h-100 p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, magnam!
        </div>
        <div style="height: 80px" class="bg-dark d-flex flex-row justify-content-between p-3">
            <input type="text" class="form-control">
            <button class="btn btn-primary">Send</button>
        </div>
    </div>
</template>

<style scoped>
    .chat-window {
        flex: 1;
    }

    .chat-wrap {
        height: calc(100% - 56px);
    }

    input {
        width: calc(100% - 100px);
    }
</style>