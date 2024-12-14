<template>
  <div>
    <div ref="myRef" />
  </div>
</template>

<script>
export default {
  name: 'ProjectTest',

  data() {
    return {

    };
  },

  mounted() {
    const a = this.$refs.myRef.$refs.child;
    const b = this.$refs.myRef;
    console.log(a, b);
  },

  methods: {
    
  },
};
</script>