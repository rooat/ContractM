<template>
  <div class="bodys">
    <div class="headclass"></div>
    <div class="left">
      <div>
        <h2>MasterNode Approved</h2>
        <p>
          <span>Id</span>：
          <input type="text" ref="approveid" placeholder="Input maseterNode id" />
        </p>
        <p>
          <button @click="masternodeApproved">Confirm</button>
        </p>
      </div>
      <hr/>
      <div>
        <h2>Mint</h2>
        <p>
          <span>Address</span>：
          <input type="text" ref="mintaddress" placeholder="Input address"/>
        </p>
        <p>
          <span>Value</span>：
          <input type="number" ref="mintvalue" placeholder="Input value"/>
        </p>
        <p>
          <button @click="mint">Confirm</button>
        </p>
      </div>
      <hr/>
      <div>
        <h2>Register</h2>
        <p>
          <span>Id1</span>：
          <input type="text" ref="registerid1" placeholder="Input maseterNode id"/>
        </p>
         <p>
          <span>Id2</span>：
          <input type="text" ref="registerid2" placeholder = "Input masterNode id"/>
        </p>
         <p>
          <span>Code</span>：
          <input type="text" ref="registercode" placeholder="Input code"/>
        </p>
        <p>
          <button @click="register">Confirm</button>
        </p>
      </div>
      <hr/>
      <div>
        <h2>SetAuditAccount</h2>
        <p>
          <span>Address</span>：
          <input type="text" ref="setauditaccountaddress" placeholder="Input address"/>
        </p>
        <p>
          <button @click="setAuditor">Confirm</button>
        </p>
      </div>
      <hr/>
      <div>
        <h2>SetAuditEnable</h2>
        <p>
          <span>Active</span>：
          <input type="text" ref="setauditenable" placeholder="Input true or false"/>
        </p>
        <p>
          <button @click="setAuditEnable">Confirm</button>
        </p>
      </div>
      <hr/>
      <div>
        <h2>SetMinerAccount</h2>
        <p>
          <span>Address</span>：
          <input type="text" ref="setmineraccountaddress" placeholder ="Input address"/>
        </p>
        <p>
          <button @click="setMiner">Confirm</button>
        </p>
      </div>
      <hr/>
      <div>
        <h2>WithDraw</h2>
        <p>
          <span>Address</span>：
          <input type="text" ref="widthdrawaddress" placeholder ="Input address"/>
        </p>
        <p>
          <span>Value</span>：
          <input type="number" ref="withdrawvalue" placeholder="Input value"/>
        </p>
        <p>
          <button @click="withdraw">Confirm</button>
        </p>
      </div>
      <hr/>
      <div>
        <h2>SetOwner</h2>
        <p>
          <span>Address</span>：
          <input type="text" ref="newowneraddress" placeholder ="Input address"/>
        </p>
        <p>
          <button @click="setOwner">Confirm</button>
        </p>
      </div>
    </div>
    <hr/>
    <div class="right">
      <span>Contract Datas</span>
      <p>
        {{dataText}}
      </p>
    </div>
    <Tips></Tips>
  </div>
</template>

<script>
import Language from './template/Language'
import Tips from './template/Tips'
import trans from '../common/utils/trans'
import Format from '../common/utils/Format'

var sendState=1;
export default {
  name: 'MainScreen',
  components:{
    'Language':Language,
    'Tips':Tips
  },
  data () {
    return {
      dataText:"show the datas of contract instance"
      
    }
  },
  mounted(){
    this.init()
    Format.Initial()
  },

  methods: {
    init : function(){
      this.$trans.$off("inithome")
      this.$trans.$on("inithome",(data)=>{
        if(data.index=="ok"){
          this.initialDatas()
        }
      })
    },
    initialDatas: async function(){

    },
   
    masternodeApproved:function(){
      let approveid = this.$refs.approveid.value;
      if(this.invalidInput(approveid)=="false"){
        let datas = this.$maseter.methods.masternodeApproved(approveid).encodeABI();
        this.dataText = datas;
        Format.masternodeApproved(approveid);
      }else{
        Format.emitFunError("Incorrect")
      }
      
    },
    mint:function(){
      let mintaddress = this.$refs.mintaddress.value;
       let mintvalue = this.$refs.mintvalue.value;
       if(this.invalidInput(mintaddress) =="false"|| this.invalidInput(mintvalue)=="false"){
        let datas = this.$maseter.methods.mint(mintaddress,Format.zeroNum(mintvalue)).encodeABI();
      this.dataText = datas;
      Format.mint(mintaddress,mintvalue);
       }else{
        Format.emitFunError("Incorrect")
       }
      
    },
    register:function(){
      let registerid1 = this.$refs.registerid1.value;
        let registerid2 = this.$refs.registerid2.value;
        let registercode = this.$refs.registercode.value;
        if(this.invalidInput(registerid1)=="false" || this.invalidInput(registerid2)=="false" || this.invalidInput(registercode)=="false"){
          let datas = this.$maseter.methods.register(registerid1,registerid2,registercode).encodeABI();
      this.dataText = datas;
      Format.register(registerid1,registerid2,registercode);
       }else{
        Format.emitFunError("Incorrect")
       }

      
    },
    setAuditor:function(){
      let setauditaccountaddress = this.$refs.setauditaccountaddress.value;
      if(this.invalidInput(setauditaccountaddress) =="false"){
         let datas = this.$maseter.methods.setAuditor(setauditaccountaddress).encodeABI();
      this.dataText = datas;
      Format.setAuditor(setauditaccountaddress);
       }else{
        Format.emitFunError("Incorrect")
       }
     
    },
    setAuditEnable:function(){
      let setauditenable = this.$refs.setauditenable.value;
        let enable=false;
        if(setauditenable=="true"){
          enable=true;
        }
        if(this.invalidInput(setauditenable)=="false" ){
          let  datas = this.$maseter.methods.setAuditEnable(enable).encodeABI();
       this.dataText = datas;
       Format.setAuditEnable(enable);
       }else{
        Format.emitFunError("Incorrect")
       }
       
    },
    setMiner:function(){
      let setmineraccountaddress = this.$refs.setmineraccountaddress.value;
      if(this.invalidInput(setmineraccountaddress)=="false" ){
        let  datas = this.$maseter.methods.setMiner(setmineraccountaddress).encodeABI();
      this.dataText = datas;
      Format.setMiner(setmineraccountaddress);
       }else{
        Format.emitFunError("Incorrect")
       }
      
    },
    withdraw:function(){
      let widthdrawaddress = this.$refs.widthdrawaddress.value;
        let withdrawvalue = this.$refs.withdrawvalue.value;
        if(this.invalidInput(widthdrawaddress) =="false"|| this.invalidInput(withdrawvalue)=="false"){
          let datas = this.$maseter.methods.withdraw(widthdrawaddress,Format.zeroNum(withdrawvalue)).encodeABI();
       this.dataText = datas;
       Format.withdraw(widthdrawaddress,withdrawvalue);
       }else{
        Format.emitFunError("Incorrect")
       }
       
    },
    setOwner:function(){
        let owneraddress = this.$refs.newowneraddress.value;
        if(this.invalidInput(owneraddress)=="false" ){
          let  datas = this.$maseter.methods.setOwner(owneraddress).encodeABI();
      this.dataText = datas;
      Format.setOwner(owneraddress);
       }else{
        Format.emitFunError("Incorrect")
       }
      
    },
    invalidInput:function(value){
      if(value==null || value=="" ||value.length==0){
        return "true";
      }
      return "false";
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headclass{
  height: 20px;
  background: grey;
}
.bodys{
  width:100%;
  height: auto;
}
.bodys .left{
  height: 290px;
  overflow-y:scroll; overflow-x:scroll;
}
.bodys div p{
  font-size:12px;
}
.bodys div input{
  width: 26%;
  border:0;
  height: 18px;
  border-bottom: 1px solid grey;
  padding-left: 1%;
  font-size: 13px;
}
.bodys div button{
  width: 10%;
  height: 24px;
  border-radius: 6px;
  font-size: 12px;
  border:0;
  background: lightblue;
}
.bodys div p span{
  display: inline-block;
  width: 12%;
  text-align: center;
}
.bodys .right{
  height: 200px;
  font-size: 22px;
}
.bodys .right p{
  text-align: center;
  width: 90%;
  margin-left: 5%;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;

}

</style>
