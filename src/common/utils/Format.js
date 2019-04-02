import Vue from 'vue'
import Web3 from 'web3'
import AddressData from '../configs/AddressData.json'
import ABI from '../configs/ABI.json'
import Device from '../configs/Device.json'
import trans from './trans'

function getWeb3(){
	try{
		if (typeof window.web3 !== 'undefined') {
       		 return new Web3(window.web3.currentProvider);
   		}
	}catch(e){
		console.log(e)
		getWeb3()
	}
}
function getEasyetz(){
	try{
		return easyetz.getAddress()
	}catch(e){
		console.log(e)
		setTimeout(function(){
			getEasyetz()
		},500)
		
	}
}

export default{
	Initial:async function(){
		let web3 = getWeb3()
		
      	let maseter = new web3.eth.Contract( ABI,AddressData.address);
	    Vue.prototype.$maseter = maseter;
		Vue.prototype.$web3 = web3
		Vue.prototype.$addressContract = AddressData.address;
		let address = await web3.eth.getCoinbase()
		Vue.prototype.$address = address;
		Vue.prototype.$trans.$emit("inithome",{"index":"ok","address":address.toLowerCase()})
	},
	timeFormat:function(now){
		var   year=now.getFullYear();
	    var   month=now.getMonth()+1;
	    var   date=now.getDate();
	    var   hour=now.getHours();
	    var   minute=now.getMinutes();
	    var   second=now.getSeconds();
			if(hour<10){
				hour="0"+hour;
			}
			if(minute<10){
				minute="0"+minute;
			}
			if(second<10){
				second="0"+second;
			}
	    return   year+"/"+month+"/"+date+" "+hour+":"+minute+":"+second;
	},
	emitFunSuccess:function(text,address){
        Vue.prototype.$trans.$emit("inithome",{"index":"ok","address":address})
        Vue.prototype.$trans.$emit("tiptext",{
            "tiptext":text,
            "type":3
          })
	 },
	 emitFunError:function(text){
	 	Vue.prototype.$trans.$emit("tiptext",{
	        "tiptext":text,
	        "type":2
	      })
	 },
	 pointNum:function(numbers){
		numbers = Number(numbers);
	  if(numbers==0){
	    numbers = "0.0000";
	  }else{
	    numbers = numbers/1000000000000000000;
	    numbers = String(numbers);
	    let index = numbers.indexOf('.');
	    if(index!=-1){
	      numbers = numbers.substr(0,index+5)
	    }
	  }
	  return numbers
	},
	zeroNum:function(numbers){
		numbers = numbers*1000000;
		numbers = String(numbers)+"000000000000"
		return numbers;
	},
	savePoint:function(numbers){
		 numbers = String(numbers);
	    let index = numbers.indexOf('.');
	    if(index!=-1){
	      numbers = numbers.substr(0,index+5)
	    }
	    return numbers;
	},
	masternodeApproved: async function(approveid){
		try{
			 await Vue.prototype.$maseter.methods.masternodeApproved(approveid).send({
                  from:Vue.prototype.$address
                })
	         this.emitFunSuccess("Success",Vue.prototype.$address)
	      }catch(e){
	        this.emitFunError("Plugin Send Failure")
	      }	
	},
	mint: async function(mintaddress,mintvalue){
		try{
			await Vue.prototype.$maseter.methods.mint(mintaddress,this.zeroNum(mintvalue)).send({
                  from:Vue.prototype.$address
                  })
	         this.emitFunSuccess("Success",Vue.prototype.$address)
	      }catch(e){
	        this.emitFunError("Plugin Send Failure")
	      }	
	},
	register: async function(registerid1,registerid2,registercode){
		try{
			 await Vue.prototype.$maseter.methods.register(registerid1,registerid2,registercode).send({
                  from:Vue.prototype.$address
                })
	         this.emitFunSuccess("Success",Vue.prototype.$address)
	      }catch(e){
	        this.emitFunError("Plugin Send Failure")
	      }	
	},
	setAuditor: async function(setauditaccountaddress){
		try{
			 await Vue.prototype.$maseter.methods.setAuditor(setauditaccountaddress).send({
                  from:Vue.prototype.$address
                })
	         this.emitFunSuccess("Success",Vue.prototype.$address)
	      }catch(e){
	        this.emitFunError("Plugin Send Failure")
	      }	
	},
	setAuditEnable: async function(enable){
		try{
			 await Vue.prototype.$maseter.methods.setAuditEnable(enable).send({
                  from:Vue.prototype.$address
                })
	         this.emitFunSuccess("Success",Vue.prototype.$address)
	      }catch(e){
	        this.emitFunError("Plugin Send Failure")
	      }	
	},
	setMiner: async function(setmineraccountaddress){
		try{
			 await Vue.prototype.$maseter.methods.setMiner(setmineraccountaddress).send({
                  from:Vue.prototype.$address
                })
	         this.emitFunSuccess("Success",Vue.prototype.$address)
	      }catch(e){
	        this.emitFunError("Plugin Send Failure")
	      }	
	},
	withdraw: async function(widthdrawaddress,withdrawvalue){
		try{
			 await Vue.prototype.$maseter.methods.withdraw(widthdrawaddress,Format.zeroNum(withdrawvalue)).send({
                  from:Vue.prototype.$address
                })
	         this.emitFunSuccess("Success",Vue.prototype.$address)
	      }catch(e){
	        this.emitFunError("Plugin Send Failure")
	      }	
	},
	setOwner: async function(owneraddress){
		try{
			 await Vue.prototype.$maseter.methods.setOwner(owneraddress).send({
                  from:Vue.prototype.$address
                })
	         this.emitFunSuccess("Success",Vue.prototype.$address)
	      }catch(e){
	        this.emitFunError("Plugin Send Failure")
	      }	
	}

}