<template>
	<div v-show="isshowtips" class="pledgetipsclass" :class="{'classa':isa,'classb':isb,'classc':isc}">
     {{tiptext}}
	</div>
</template>

<script>
import trans from '../../common/utils/trans'
export default {
  name: 'MainScreen',
  components:{
  },
  data () {
    return {
    	isshowtips:false,
    	tiptext:"",
    	isa:true,
    	isb:false,
    	isc:false
    }
  },
  mounted() {
  	this.init()
  },
  methods: {
  	init:function(){
      this.$trans.$off('tiptext')
  		this.$trans.$on("tiptext",(data)=>{  
      this.isshowtips=true		
        if(data.type==2){
  				this.isb=true;
          this.isa=false
  			}else if(data.type==3){
          this.isa=true
          this.isb=false
  			}
  			this.tiptext=data.tiptext
        setTimeout(this.sss,3000)
  		})
  	},
    sss:function(){
       this.isshowtips=false
        console.log("showtips:",this.isshowtips)
    }
  }
}
</script>

<style scoped="scoped">
.classa{
	background-color: lightblue;
	color:black;
}
.classb{
	background-color: #ef5075;
	color:white;
}
.pledgetipsclass{
  width: 20%;
  height: 60px;
  position: absolute;
  z-index: 10;
  top: 100px;
  left: 40%;
  border-radius: 13px;
  font-size: 17px;
  line-height: 60px;
}
</style>