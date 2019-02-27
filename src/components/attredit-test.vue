<template>
<div>
    <el-button class="addbtn" size="mini"  
@click="handleEdit()"
type="primary"
>新增属性编辑</el-button>
  <el-table :span-method="arraySpanMethod" :data="tableData" :height="240" :show-header="true" border style="width:625px">
    <el-table-column label="属性名" height="10"  width="250" type="expand">
    <!-- <template slot-scope="user">
        <el-input v-show="!user.row.isEdit" v-model="user.row.attr" placeholder="输入"></el-input>
        <div v-show="user.row.isEdit">{{user.row.attr}}</div>     
    </template> -->
    </el-table-column>
    <!-- <el-table-column prop="name" label="属性值" height="10" width="250">
    </el-table-column> -->
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
import { link, constants } from "fs";

export default {

    data() {
    return {
        isEdit:"false",
        addgroupname:"",
        tableData:[

        ],
    }
 },
     methods:{
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            try {
                if(this.tableData[rowIndex].attrindex === '1'){
                    return[row,2];
                }
                else if(this.tableData[rowIndex].attrindex === '2'){
                    return[row,column];
                }
            } catch (error) {
                
            }
        },
        deleteRow(index, row) {
            row.splice(index, 1);
        },
        open() {
            this.$message('这是一条消息提示');

            
        },
        handleEdit(){
            const adddat = {
                attr:"",
                isEdit:false,
            };
            this.tableData.unshift(adddat);
            // this.$message({
            // message: '恭喜你，这是一条成功消息',
            // type: 'success'
            // });
        }

    }
 }

</script>

<!-- 引入组件库 -->

<style>
.addbtn{
    position:absolute;
    top: 30px;
    left:10px;
}
</style>
