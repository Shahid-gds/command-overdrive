<template>
    <div class="backdrop"></div>
    <div class="popup p-28 rounded-xl space-y-4">
        <div class="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-16 shrink-0 fill-[#61C1B4] inline tick" viewBox="0 0 512 512">
                <path
                    d="M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-8.005-8.213-21.13-8.393-29.35-.387-8.213 7.998-8.386 21.137-.388 29.35l77.492 79.561a20.687 20.687 0 0 0 14.869 6.275 20.744 20.744 0 0 0 14.288-5.694l147.373-139.762c8.316-7.888 8.668-21.027.774-29.344z"
                    data-original="#000000" />
                <path
                    d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 470.487c-118.265 0-214.487-96.214-214.487-214.487 0-118.265 96.221-214.487 214.487-214.487 118.272 0 214.487 96.221 214.487 214.487 0 118.272-96.215 214.487-214.487 214.487z"
                    data-original="#000000" />
            </svg>
        </div>
        <h4 class="text-2xl text-[#61C1B4] mt-6 text-clip font-[Semi-Bold] uppercase">Successfully accepted!</h4>
    </div>
</template>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    paint-order: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

@keyframes tickAnimation {
    0% { transform: scale(0); }
    100% { transform: scale(1); }
}

.tick {
    animation: tickAnimation 0.5s ease forwards;
}
</style>