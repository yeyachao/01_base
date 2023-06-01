<template>
  <div class="shop-form">
    <el-form ref="shopForm" :model="shopFormData" label-width="200px" :rules="shopRules">
      <el-form-item label="所属门店" prop="shopId">
        <el-select class="sel-item" v-model="shopFormData.shopId">
          <el-option
            label="不选择"
            value=""
          ></el-option>
        </el-select>
        <span class="hint-text">没有多店铺的不需要选择</span>
      </el-form-item>
      <el-form-item label="商品分类" prop="categoryId">
        <el-select 
          class="sel-item" 
          placeholder="商品分类"
          v-model="shopFormData.categoryId"
        >
          <el-option
            v-for="item in categoryList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品条码" prop="barCode">
        <el-input class="sel-item"  v-model="shopFormData.barCode"></el-input>
        <span class="hint-text">建议配合扫码枪使用</span>
      </el-form-item>
      <el-form-item label="商品名称" prop="name">
        <el-input class="name-ipt" v-model="shopFormData.name"></el-input>
      </el-form-item>
      <el-form-item label="别名" prop="subName">
        <el-input class="sel-item"  v-model="shopFormData.subName"></el-input>
      </el-form-item>
      <el-form-item label="商品类型" prop="type">
        <el-radio v-model="shopFormData.type" :label="0">实物商品</el-radio>
        <el-radio v-model="shopFormData.type" :label="1">虚拟商品</el-radio>
      </el-form-item>
      <el-form-item label="海外直邮" prop="overseas">
        <el-radio v-model="shopFormData.overseas" :label="true">支持</el-radio>
        <el-radio v-model="shopFormData.overseas" :label="false">不支持</el-radio>
      </el-form-item>
      <el-form-item label="标签(关键字)" prop="tags">
        <el-input class="sel-item"  v-model="shopFormData.tags"></el-input>
        <span class="hint-text">多个标签用英文逗号隔开</span>
      </el-form-item>
      <el-form-item label="扩展属性">
        <el-row v-for="(item,index) in num" :key="index">
          <el-input class="attr-ipt"></el-input>
          <span class="attr-text">:</span>
          <el-input class="attr-ipt"></el-input>
          <el-button type="success" @click="num++">添加</el-button>
          <el-button type="danger" @click="num--">删除</el-button>
        </el-row>    
      </el-form-item>
      <el-form-item label="商品特色" prop="characteristic">
        <el-input 
          type="textarea"
          rows="4" 
          v-model="shopFormData.characteristic"
        ></el-input>
      </el-form-item>
      <el-form-item label="选择物流模板" prop="logisticsId">
        <el-select class="sel-item" v-model="shopFormData.logisticsId">
          <el-option label="不使用物流" value=""></el-option>
          <el-option
            v-for="item in logisticsList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
        <span class="hint-text"> 虚拟物品等不需要快递（不需要用户填写收货地址）的商品请选择不需要物流</span>
      </el-form-item>
      <el-form-item label="优惠券" prop="maxCoupons">
        <el-input 
          class="attr-ipt" 
          v-model="shopFormData.maxCoupons"
          type="number"
        ></el-input>
        <span class="hint-text">最多可使用几张优惠券</span>
      </el-form-item>
      <el-form-item label="排序" prop="paixu"> 
        <el-input class="attr-ipt" v-model="shopFormData.paixu"></el-input>
      </el-form-item>
      <el-form-item label="是否推荐" prop="recommendStatus">
        <el-radio v-model="shopFormData.recommendStatus" :label="0">不推荐</el-radio>
        <el-radio v-model="shopFormData.recommendStatus" :label="1">推荐</el-radio>
      </el-form-item>
      <el-form-item label="是否展示" prop="hidden">
        <el-radio v-model="shopFormData.hidden" :label="0">正常展示</el-radio>
        <el-radio v-model="shopFormData.hidden" :label="1">默认隐藏,不在前端展示</el-radio>
      </el-form-item>
      <el-form-item label="是否售后" prop="afterSale">
        <el-checkbox label="0" v-model="shopFormData.afterSale">仅退款</el-checkbox>
        <el-checkbox label="1"  v-model="shopFormData.afterSale">退货退款</el-checkbox>
        <el-checkbox label="2"  v-model="shopFormData.afterSale">换货</el-checkbox>
        <span class="hint-text">都不勾选代表本商品不支持售后</span>
      </el-form-item>
      <el-form-item label="上架状态" prop="status">
        <el-radio v-model="shopFormData.status" :label="0">上架</el-radio>
        <el-radio v-model="shopFormData.status" :label="1">下架</el-radio>
      </el-form-item>
      <el-form-item label="图片" prop="pics">
        <transition name="fade">
          <el-row class="img-hint-box" v-if="imgBoxShow">
            <span class="hint-text">第一张图片默认为封面图片，可拖动排序</span>
            <i @click="imgBoxShow = false" class="el-icon-close img-close"></i>
          </el-row>
        </transition>   
        <el-button
          type="warning"
          size="mini"
          icon="el-icon-upload"
          @click="upLoadImg"
        >上传本地图片</el-button>
        <el-row>
          <div class="upload-img-box" v-for="item in shopFormData.pics" :key="item">
            <img class="upload-img" :src="item">
          </div>         
        </el-row>
      </el-form-item>
      <el-form-item label="详细介绍" prop="content">
        <quill-editor
          v-model="shopFormData.content"
          :options="ediOptions"
          class="editor"
        ></quill-editor>
      </el-form-item>
      <el-form-item label="市场价" prop="originalPrice">
        <el-input v-model="shopFormData.originalPrice" class="attr-ipt"></el-input>
      </el-form-item>
      <el-form-item label="现价" prop="minPrice">
        <el-input v-model="shopFormData.minPrice" class="attr-ipt"></el-input>
      </el-form-item>
      <el-form-item label="需要积分" prop="minScore">
        <el-input v-model="shopFormData.minScore" class="attr-ipt"></el-input>
        <span class="hint-text">购买需要扣除用户的积分数量</span>
      </el-form-item>
      <el-form-item label="赠送积分" prop="commission">
        <el-input v-model="shopFormData.commission" class="attr-ipt"></el-input>
        <span class="hint-text">购买后用户可获得的积分数量</span>
      </el-form-item>
      <el-form-item label="最少购买" prop="minBuyNumber">
        <el-input type="number" v-model="shopFormData.minBuyNumber" class="attr-ipt"></el-input>
      </el-form-item>
      <el-form-item label="库存" prop="stores">
        <el-input type="number" v-model="shopFormData.stores" class="attr-ipt"></el-input>
      </el-form-item>
      <el-form-item>
        <el-col :span="12" :offset="6">
          <el-button>重置</el-button>
          <el-button type="primary" @click="submitShopForm">确定</el-button>
        </el-col>      
      </el-form-item>
    </el-form>

    <el-dialog
      :visible.sync="uploadVisible"
      width="45%"
    >
      <el-input></el-input>
      <el-upload
        action="https://user.api.it120.cc/fileUpload"
        :headers="headers"
        name="upfile"
        :on-preview="handlePictureCardPreview"
        :on-success="uploadSuccess"
        list-type="picture-card"
      >
        <el-button type="primary">点击上传</el-button>
      </el-upload>
      <el-dialog :visible.sync="imgBoxVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <span slot="footer" class="dialog-footer">
        <el-button @click="uploadVisible = false">取 消</el-button>
        <el-button type="primary" @click="uploadSure">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name:"ShopForm",
  data() {
    var picsValidator = (rule, value, callback)=>{
      // value  == pics
      if(value.length == 0){
        callback(new Error('至少上传一张图片'))
      }else{
        callback()
      }     
    }

    return {
      shopRules:{
        categoryId:[
          {required:true,message:"商品类别不能为空",trigger:'change'}
        ],
        name:[
          {required:true,message:"商品名称不能为空",trigger:'blur'},
          {min:2,message:"商品名称不能低于两个字符",trigger:"blur"},
          {pattern:/^[\u4e00-\u9fa5]+$/,message:"商品名只能是中文",trigger:"blur"}
        ],
        characteristic:[
          {max:500,message:"最大字符数不能超过500",trigger:"blur"}
        ],
        maxCoupons:[
          {required:true,message:"需要填写优惠券",trigger:"blur"}
        ],
        pics:[
          {required:true,trigger:"blur"},
          {validator:picsValidator,trigger:"blur"}
        ],
        content:[
          {required:true,message:"内容必填",trigger:"blur"}
        ],
        originalPrice:[
          {required:true,message:"必填",trigger:"blur"},
          {pattern:/^\d+$/,message:"只能是正数",trigger:"blur"}
        ],
        minPrice:[
          {required:true,message:"必填",trigger:"blur"},
          {pattern:/^\d+$/,message:"只能是正数",trigger:"blur"}
        ],
        minScore:[
          {required:true,message:"必填",trigger:"blur"},
          {pattern:/^\d+$/,message:"只能是正数",trigger:"blur"}
        ],
        commission:[
          {required:true,message:"必填",trigger:"blur"},
          {pattern:/^\d+$/,message:"只能是正数",trigger:"blur"}
        ],
        stores:[
          {required:true,message:"必填",trigger:"blur"},
          {pattern:/^\d+$/,message:"只能是正数",trigger:"blur"}
        ]
      },
      ediOptions:{
        placeholder:"",
      },
      imgList:[],
      uploadVisible:false,
      imgBoxVisible:false,
      dialogImageUrl:"",
      headers:{
        "X-Token":sessionStorage.getItem('token')
      },
      num:1,
      imgBoxShow:true,
      categoryList:[],
      logisticsList:[],
      shopFormData:{
        shopId:'',
        categoryId:"",
        barCode:'',
        name:"",
        subName:"",
        type:0,
        overseas:false,
        tags:"",
        characteristic:"",
        logisticsId:"",
        maxCoupons:1,
        paixu:0,
        recommendStatus:0,
        hidden:0,
        afterSale:[0,1,2],
        status:0,
        pics:[],
        content:"",
        originalPrice:0,
        minPrice:0,
        minScore:0,
        commission:0,
        commissionType:1,
        minBuyNumber:1,
        unit:"份",
        stores:0,
        content2:"",
        detailsJsonStr:"",
        earningsPercent:'',
        earningsPercent2:'',
        extJsonStr:'',
        extJsonStr2:'',
        fxType:1,
        kanjia:false,
        miaosha:false,
        pingtuan:false,
        videoId:"",
        weight:""
      }
    }
  },
  created() {
    console.log(this.$route.params.id)
    if(this.$route.params.id){
      this.getShopGoodsInfo(this.$route.params.id)
    }
    this.getCategoryList()
    this.getLogisticsList()
  },
  methods:{
    getCategoryList(){
      this.$net({
        url:"/user/apiExtShopGoodsCategory/list",
        method:"post",
        data:{
          // shopId:""
        }
      }).then(res => {
        console.log(res)
        this.categoryList = res.data.data
      })
    },
    getLogisticsList(){
      this.$net({
        url:"/user/apiExtShopFreightTemplate/list",
        method:"post"
      }).then(res => {
        this.logisticsList = res.data.data
        this.shopFormData.logisticsId = res.data.data[0].id
      })
    },
    upLoadImg(){
      this.uploadVisible = true
    },
    handlePictureCardPreview(file){
      this.dialogImageUrl = file.url
      this.imgBoxVisible = true;
    },
    uploadSuccess(file){
      console.log(file)  
      this.imgList.push(file.data.url) 
    },
    uploadSure(){
      this.shopFormData.pics = JSON.parse(JSON.stringify(this.imgList))
      this.uploadVisible = false
    },
    submitShopForm(){
      this.$refs.shopForm.validate((boo,obj)=>{
        if(boo){
          this.$net({
            url:"/user/apiExtShopGoods/save",
            method:"post",
            data:this.shopFormData
          }).then(res => {
            console.log(res)
          })
        }else{
          this.$message.error("部分内容填写不正确或没有填写")
        }
      })
    },
    getShopGoodsInfo(id){
      this.$net({
        url:"/user/apiExtShopGoods/info",
        params:{
          id
        }
      }).then(res => {
        console.log(res)
        this.shopFormData = res.data.data.info
        this.shopFormData.pics = res.data.data.pics.map(item => item.pic)
        this.imgList = res.data.data.pics.map(item => item.pic)
        this.shopFormData.afterSale = res.data.data.info.afterSale.split(",") 
        this.shopFormData.content = res.data.data.content.content
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .shop-form{
    margin-left: 10px;
  }
  /deep/ .el-form-item__label{
    font-weight: bold;
  }

  .sel-item{
    width: 400px;
  }
  .name-ipt{
    width: 800px;
  }
  .attr-ipt{
    width: 150px;
  }
  .attr-ipt:last-of-type{
    margin-right: 20px;
  }
  .attr-text{
    margin: 0px 20px;
  }
  .hint-text{
    margin-left: 10px;
    color: orange;
  }
  .img-hint-box{
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    background: oldlace;
    font-size: 13px;
  }
  .img-close{
    float: right;
    margin-right: 20px;
    line-height: 30px;
    color: #999;
  }
  .editor{
    height: 300px;
    margin-bottom: 100px;
  }
  .upload-img{
    width: 100px;
    height: 100px;
  }
  .upload-img-box{
    display: inline-block;
    margin-right: 20px;
  }




  .fade-leave-to{
    opacity: 0;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    transition: all 0.5s;
  }
</style>
            // {
            //   categoryId:this.shopFormData.categoryId,
            //   content:this.shopFormData.content,
            //   minPrice:this.shopFormData.minPrice,
            //   name:this.shopFormData.name,
            //   originalPrice:this.shopFormData.originalPrice,
            //   status:this.shopFormData.status,
            //   stores:this.shopFormData.stores,
            //   pics:this.shopFormData.pics
            // }