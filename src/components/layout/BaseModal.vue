<template>
    <!--Overlay Effect-->
    <transition
        name="modal"
        enter-active-class="transition ease-out duration-100"
        leave-active-class="transitional ease-in-quad"
        enter-class="opacity-0 scale-70"
        enter-to-class="opacity-100 scale-100"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-70"
    >
        <div
            v-if="show"
            @click="close"
            class="fixed inset-0 bg-gray-600/75 overflow-y-auto h-full w-full z-10"
        >
            <!--modal card-->
            <div
                @click.stop
                class="relative top-20 mx-auto p-5 border max-w-prose shadow-lg rounded-md bg-white"
            >
                <!-- Modal Content -->
                <slot></slot>
                
                <div class="items-center px-4 py-3">
                    <button
                        v-if="!noCloseButton"
                        @click="close"
                        id="ok-btn"
                        class="button w-full"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    props: {
        id: {
            type: String,
            required: true
        },
        show: {
            type: Boolean,
            required: true,
        },
        noCloseButton: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: {
        close: (id ) => {
            if (id) {
                return true
            } else {
                console.warn('Invalid submit event payload!')
                return false
            }
        }
    },
    methods: {
        close(){
            this.$emit('close', this.id)
        }
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>