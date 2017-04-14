<template lang="html">
  <div class="">
    <ms :options="options" />
  </div>
</template>

<script>
import ms from 'src/components/modalSelect/index'

export default {
  data() {
    return {
      options:{
        list: [
          {id: "a0", type: "level0", label: "A0", pid: ""},
          {id: "a1", type: "level1", label: "A1", pid: "a0"},
          {id: "a2", type: "level0", label: "A2", pid: ""},
          {id: "a3", type: "level2", label: "A3", pid: "a1"},
          {id: "a3_1", type: "level2", label: "A3_1", pid: "a1"},
          {id: "a4", type: "level3", label: "A4", pid: "a3"},
        ],
        type: ["level0", "level1", "level2", "level3"],
        defaultValue: { "level2": "a3,a3_1"},
        disabledItems: ["level0_a2"]
      }
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {ms},
};
</script>

<style lang="css">
</style>
