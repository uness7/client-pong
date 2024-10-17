<template>
    <div class="content">
        <div class="header">
            <p id="error">Page you lookin for doesn't exist</p>
        </div>
    </div>
</template>

<style scoped>
    .content {
        color: black;
        //color: white;
        background-color: var(--background-color);
        margin-top: 350px;
        font-family: '8bit', sans-serif;
        text-align: center;
    }

    .header {
        display: flex;
        justify-content: center;
        align-items: baseline;
    }

    #error {
        font-size: 150px;
        margin: 0;
    }

    #q {
        font-size: 200px;
        color: var(--primary-color);
        margin: 0 0 0 10px;
    }

    #w {
        font-size: 50px;
        margin-top: 10px;
    }
</style>
