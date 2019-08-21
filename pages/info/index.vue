<template>
    <div class="page-info">
        <div class="left">
            <my-menu />
        </div>
        <div class="right">
            <div class="info">
                <div class="header">
                    <h2>个人信息</h2>
                </div>
                <div class="content">
                    <div class="item clearfix">
                        <div class="field-name title-avatar">头像</div>
                        <el-avatar :size="48" class="field-avatar" :src="avatar"></el-avatar>
                        <div class="update">
                            <el-upload
                                ref="avatar-upload"
                                class="avatar-uploader"
                                action="http://api.strayjoke.test/user/avatar"
                                accept="image/*"
                                :show-file-list="false"
                                :on-change = "handleAvatarPreview"
                                :on-success="handleAvatarSuccess"
                                :headers="headers"
                                :auto-upload="false">
                                <el-button round>修改</el-button>
                            </el-upload>
                        </div>
                    </div>
                    <div class="item clearfix">
                        <div class="field-name">昵称</div>
                        <div class="field-value">{{user}}</div>
                        <div class="update">
                            <el-button round @click="nameDialogVisible=true">修改</el-button>
                        </div>
                    </div>
                    <div class="item clearfix">
                        <div class="field-name">生日</div>
                        <div class="field-value">{{birth}}</div>
                        <div class="update">
                            <el-button round @click="birthDialogVisible=true">修改</el-button>
                        </div>
                    </div>
                    <div class="item clearfix">
                        <div class="field-name">换绑手机</div>
                        <div class="field-value">{{phone}}</div>
                        <div class="update">
                            <el-button round>修改</el-button>
                        </div>
                    </div>
                    <div class="item clearfix">
                        <div class="field-name">登录密码</div>
                        <div class="field-value"></div>
                        <div class="update">
                            <el-button round @click="passwordDialogVisible=true">修改</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
            title="修改头像"
            :visible.sync="avatarDialogVisible"
            width="480px"
            custom-class="editDialog clearfix"
        >
            <el-row :gutter="5">
                <el-col :span="18">
                    <div style="width:300px; height:300px; border:1px solid #999;">
                        <vue-cropper 
                            ref="cropper"
                            :img="newAvatar" 
                            outputType="png"
                            :autoCrop="true"
                            :centerBox="true"
                            @realTime= "realTime"
                        >
                        </vue-cropper>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="show-preview" :style="previewStyle">
                        <div :style="previews.div">
                            <img :src="previews.url" :style="previews.img">
                        </div>
                    </div>
                </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="editAvatar">确定修改</el-button>
                <el-button @click="refreshCrop">刷新</el-button>
                <el-button @click="avatarDialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="修改昵称"
            :visible.sync="nameDialogVisible"
            width="480px"
            custom-class="editDialog"
        >
            <div class="body">
                <div class="dialog-item">当前昵称<span class="name">{{user}}</span></div>
                <div class="dialog-item">
                    新昵称<el-input class="name-field" v-model="newName" />
                </div>
                <!-- <p class="tips">以中文或英文字母开头，限4-16个字符，一个汉字为两个字符</p> -->
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="editName">确 定</el-button>
                <el-button @click="nameDialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="修改生日"
            :visible.sync="birthDialogVisible"
            width="480px"
            custom-class="editDialog"
        >
            <div class="body">
                <brithday v-on:change="changeBirth" :birthday="birth"></brithday>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="editBirth">确 定</el-button>
                <el-button @click="passwordDialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="修改密码"
            :visible.sync="passwordDialogVisible"
            width="480px"
            custom-class="editDialog"
        >
            <el-form ref="passwordForm" :model="passwordForm" label-width="80px">
                <el-form-item label="当前密码" prop="password">
                <el-input v-model="passwordForm.password"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="newPassword">
                <el-input v-model="passwordForm.newPassword"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmed">
                <el-input v-model="passwordForm.confirmed"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="editPassword">确 定</el-button>
                <el-button @click="passwordDialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>    
</template>

<script>
import MyMenu from '@/components/public/menu.vue'
import Brithday from '@/components/public/birthday.vue'
import { mapState } from 'vuex'
import { editName, editBirth, editAvatar } from '@/api/user.js'

export default {
    components:{
        MyMenu,
        Brithday,
    },
    computed:{
        ...mapState({
            user: state => state.user,
            phone:state => state.phone.substr(0,3) + "****" + state.phone.substr(7),
            birth: state => state.birth,
            avatar: state => state.avatar ? state.avatar : ''
        })
    },
    data(){
        return {
            headers:{
                Authorization:`Bearer ${this.$store.state.token}`
            },
            nameDialogVisible:false,
            avatarDialogVisible:false,
            phoneDialogVisible:false,
            birthDialogVisible:false,
            passwordDialogVisible:false,
            newName:'',
            newBirth:this.birth,
            newAvatar:'',
            passwordForm:{
                password:'',
                newPassword:'',
                confirmed:''
            },
            previews:{},
            previewStyle:{}
        }
    },
    mounted:function(){
    },
    methods:{
        editName(){
           editName({name:this.newName}).then(res=>{
               this.$sotre.commit('set_user', this.newName)
           }) 
        },
        editPassword(){

        },
        editBirth(){
            editBirth({birth:this.newBirth}).then(res=>{
                this.$sotre.commit('set_birth', this.newBirth)
            })
        },
        changeBirth(data){
            this.newBirth = data
        },
        handleAvatarSuccess(res, file) {
            this.imgUrl = URL.createObjectURL(file.raw)
            this.$sotre.commit('set_avatar', res.data.path)
        },
        handleAvatarPreview(file) {
            this.avatarDialogVisible = true
            let reader = new FileReader()
            reader.readAsDataURL(file.raw)
            reader.onload=()=>{
                this.newAvatar = reader.result
            }
        },
        refreshCrop() {
            // clear
            this.$refs.cropper.refresh();
        },
        realTime(data){
            let previews = data
            this.previews = data
            this.previewStyle = {
                width: previews.w + "px",
                height: previews.h + "px",
                overflow: "hidden",
                margin: "0",
                zoom: (100 / previews.h) ,
                border:'1px solid #999'       
            }
        },
        editAvatar() {
            this.$refs.cropper.getCropData(data => {
                editAvatar({avatar:data}).then(res=>{
                    this.$store.commit('set_avatar', data)
                    this.avatarDialogVisible = false
                })
            })
        }
    }   
}
</script>

<style lang="scss">
.page-info{
    margin: 15px auto 0;
    width: 1190px;
    .right{
        width: 908px;
        background: #FFF;
        border: 1px solid #E5E5E5;
        border-radius: 4px;
        padding: 20px 20px 0;
        float: right;
        position: relative;

        .info{
            .header{
                margin:10px 0 ;
            }
            .content{
                .item{
                    border-top: 1px solid #E5E5E5;
                    padding: 30px 0;
                    .field-name{
                        font-size: 18px;
                        color: #333;
                        line-height: 34px;
                        width: 95px;
                        border-right: 1px solid #e5e5e5;
                        text-align: right;
                        padding-right: 30px;
                        float: left;
                    }
                    .title-avatar{
                        line-height:48px;
                    }
                    .field-value{
                        float: left;
                        text-align: right;
                        padding-left: 30px;
                        line-height: 34px;
                    }
                    .field-avatar{
                        margin-left:30px;
                    }
                    .update{
                        margin: 0 15px;
                        line-height: 40px;
                        float:right;
                    }
                }
            }
        }
    }
    .editDialog{
        border-radius:10px;
        .el-dialog__header{
            background: #f7f7f7;
            border-radius: 10px;
        }
        .body{
            margin:0 15px;
            .dialog-item{
                margin:15px auto;
                .name-field{
                    width:260px;
                    padding-left:20px;
                }
                .name{
                    padding-left:20px;
                    font-size: 16px;
                }
            }
            .tips{
                font-size:12px;
                color:#999;
            }
        }
        .dialog-footer{
            display: block;
            text-align: center;
        }
    }
}
</style>
