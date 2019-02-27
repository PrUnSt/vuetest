<template>
        <!-- <div class="a"> -->

        <div  class="home">
        <div class="a">
                                    <div class="logo">
                <img src="../assets/logo.png">
            </div>
            <el-button class="closebtn" size="small"  type="text" icon="el-icon-close" style="font-size: 20px;"></el-button>
        </div>
        <div style="width: 360px;">
            <el-button @click="addarrdata" style="line-height:0">新增参数组</el-button>
            <el-button @click="addsubarrdata" style="line-height:0">新增参数</el-button>
        </div>
       <el-table
            :data="tableData"
            @row-click="handleRowClick"
            :span-method="arraySpanMethod"
            style="width: 360px">
            <!-- <el-table-column
            prop="title"
            label="属性值"
            width="180">
            </el-table-column> -->
            <el-table-column
            label="属性名称"
            width="180">
                <template slot-scope="scope">
                    <div class="sub-title" @click="arrType">
                        <div>{{scope.row.title}}</div>
                        <el-button @click="deletearr(scope.$index, tableData)" size="mini">删除</el-button>
                    </div>
                    <el-table
                        :data="scope.row.data"
                        @row-click="handleSubRowClick"
                        :show-header="false"
                        style="width: 100%">
                        <el-table-column
                        label="属性名称"
                        prop="name"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        label="属性值"
                        width="180">
                            <template slot-scope="subscope">
                                <div class="td-template">
                                    <div>{{subscope.row.value}}</div>
                                    <el-button @click="deletearr(subscope.$index, scope.row.data)" size="mini">删除</el-button>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column
            prop="value"
            label="属性值"
            width="180">
            </el-table-column>
        </el-table>
        </div>
    <!-- </div> -->
</template>

<script type="text/ecmascript-6">
export default {
    data() {
      return {
        tableData: [{
            id: 1,
            title: '1111111',
            data: [
                {
                    name: 'adfsf',
                    value: '65165'
                }
            ]
        }, {
            id: 2,
            title: '22222222',
            data: [
                {
                    name: 'adfsf',
                    value: '65165'
                }
            ]
        }, {
            id: 3,
            title: '333333333',
            data: [
                {
                    name: 'adfsf',
                    value: '65165'
                }
            ]
        }, {
            id: 4,
            title: '44444444',
            data: [
                {
                    name: 'adfsf',
                    value: '65165'
                }
            ]
        }],
        arrNumber: 0,
        arrtype: false
      }
    },
    mounted(){
        
    },
    methods: {
        addarrdata() {
        var param = {
            title: '自定义',
            data: [
        {
            name: '自定义',
            value: '自定义'
        }]
        }
        if(this.tableData.length==0) {
            param.id = 0
        } 
        else {
            param.id = this.tableData[this.tableData.length-1].id+1;
        }
            this.tableData.push(param)
        },
        addsubarrdata() {
            this.tableData[this.arrNumber].data.push({
                name: '自定义',
                value: '自定义'
            })
        },
        arrType() {
            this.arrtype = true;
        },
        handleSubRowClick() {

        },
        deletearr(index, arr) {
            arr.splice(index, 1)
        },
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            // if (rowIndex % 2 === 0) {
            //     if (columnIndex === 0) {
            //         return [1, 2];
            //     } else if (columnIndex === 1) {
            //         return [0, 0];
            //     }
            // }
            return [row, 2]
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleRowClick(row, event, column) {
            // console.log(row, event, column)
            this.tableData.forEach((ele, index) => {
                // console.log(idnex, ele)
                if(ele.id == row.id) {
                    this.arrNumber = index;
                }
            })
            
        }
    }
}
</script>

<style>
.title{
  display: flex;
  justify-content: space-between;
  padding: 10px  ;
  width:325px;
  height: 20px;
  border:1px solid #DDDDDD 

  /* background: #888888 */
}

.el-header{
    line-height: 20px;
}

.a{
    height: 28px;
    display: flex;
    justify-content: space-between;
    padding: 10px 5px 5px 5px;
    border:1px solid #DDDDDD ;
    border-bottom:0px
}
.logo{
    padding:4px
}
.el-button--small, .el-button--small.is-round {
    padding: 3px 15px;
}

</style>
<style lang="scss" scoped type="text/css">
@import './home';
</style>