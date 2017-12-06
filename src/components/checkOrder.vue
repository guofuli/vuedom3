<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog" @onclose ="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatusSuc">
        支付成功
      </div>
      <div class="button" @click="checkStatusFail" >
        支付失败
      </div>
    </this-dialog>

    <this-dialog :is-show ="isShowSuccessDialog"  @onclose ="toOrderList">
      购买成功！
    </this-dialog>

    <this-dialog :is-show="isShowFailDialog" @onclose = "closeFail" >
      购买失败！
    </this-dialog>

  </div>
</template>

<script>
  import thisDialog from './dialog'
  export default {
    components:{
      thisDialog
    },
    props:{
      isShowCheckDialog:{
        style:Boolean,
        default:false
      },
      orderId:{
        style:[String,Number]
      }

    },
    data(){
      return{
        isShowSuccessDialog:false,
        isShowFailDialog:false
      }
    },
    methods:{
  
      checkStatusSuc(){
        this.$http.get('http://127.0.0.1:9527/createOrderList')
        .then((res)=>{
          this.isShowSuccessDialog = true

          this.$emit('on-close-check-dialog')

        }, (err)=>{

          this.isShowFailDialog = true
          this.$emit('on-close-check-dialog')

        })

      },
      checkStatusFail(){
        this.isShowFailDialog = true
        this.$emit('on-close-check-dialog')

      },
      checkStatus(){
        this.isShowCheckDialog = false
        this.$emit('on-close-check-dialog')

      },
      toOrderList(){
        this.isShowSuccessDialog = false

      },
      closeFail(){
        this.$emit('on-close-check-dialog')
        this.isShowFailDialog = false
      }
    }
    
   
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
