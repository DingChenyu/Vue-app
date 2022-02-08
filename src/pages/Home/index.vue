<template>
  <div>
    <!-- TODO: TypeNav为全局组件-->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer';
import Recommend from './Recommend';
import Rank from './Rank';
import Like from './Like';
import Floor from './Floor';
import Brand from './Brand';
import { mapState } from 'vuex';

export default {
  name: '',
  components: {
    ListContainer, Recommend, Rank, Like, Floor, Brand
  },
  computed: {
  },
  methods: {
  }
};
</script>