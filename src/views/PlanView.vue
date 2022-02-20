<template>
  <div>
    <v-toolbar dense flat>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>

    <v-divider />

    <v-container>
      <v-btn @click="editedDialog = true" color="primary">
        <v-icon left>mdi-plus</v-icon>新增照護項目
      </v-btn>

      <v-data-table :headers="headers" :items="items">
        <template v-slot:[`item.totalPrice`]={item}>
          {{ item.price && item.amount ? item.price * item.amount : 'UNKNOW' }}
        </template>
        <template v-slot:[`item.actions`]={item}>
          <v-btn class="mr-2" @click="editItem(item)" color="primary" small>
            <v-icon small>mdi-pencil</v-icon>編輯
          </v-btn>
          <v-btn class="mr-2" @click="deleteItem(item)" color="error" small>
            <v-icon small>mdi-delete</v-icon>刪除
          </v-btn>
        </template>
      </v-data-table>

      <v-card>
        <v-card-title>額度試算</v-card-title>

        <v-card-text>
          <div class="pa-4">計算公式: 每月等級額度 - (B碼照護服務 + C碼專業服務) = 剩餘額度</div>

          <div class="d-flex align-center">
            <v-select
              v-model="calcItem.degreePrice"
              :items="amountItems"
              :menu-props="{ offsetY: true }"
              :item-text="item => `${item.degree}等級 - ${item.amount}元`"
              item-value="amount"
              label="每月等級額度"
              outlined
              dense
              hide-details
            ></v-select>
            <div class="text-h5">－</div>

            <div class="text-h5">（</div>
            <v-text-field
              v-model="calcItem.bPrice"
              label="B碼照護服務"
              outlined
              dense
              hide-details
              readonly
            ></v-text-field>
            <div class="text-h5">＋</div>
            <v-text-field
              v-model="calcItem.cPrice"
              label="C碼專業服務"
              outlined
              dense
              hide-details
              readonly
            ></v-text-field>
            <div class="text-h5">）</div>
            
            <div class="text-h5">＝</div>
            <v-text-field
              v-model="calcItem.diffPrice"
              :color="calcItem.diffPrice < 0 ? 'error' : 'primary'"
              label="剩餘額度"
              outlined
              dense
              hide-details
              readonly
            ></v-text-field>
          </div>
        </v-card-text>
      </v-card>

      <v-card class="mt-4">
        <v-card-title>自付額度試算</v-card-title>

        <v-card-text>
          <v-select
            class="mr-2"
            v-model="calcSelfPayItem.selfPayPercent"
            :items="selfPayItems"
            :menu-props="{ offsetY: true }"
            :item-text="item => `${item.name} 自付百分之${item.selfPayPercent * 100}`"
            item-value="selfPayPercent"
            label="客戶類別"
            outlined
            dense
            hide-details
          ></v-select>

          <div class="d-flex align-center mt-4">
            <v-text-field
              v-model="calcSelfPayItem.bPrice"
              label="B碼照護服務 總自付額度"
              outlined
              dense
              hide-details
              readonly
            ></v-text-field>
            <div class="text-h5">＋</div>
            <v-text-field
              v-model="calcSelfPayItem.cPrice"
              label="C碼專業服務 總自付額度"
              outlined
              dense
              hide-details
              readonly
            ></v-text-field>

            <div class="text-h5">＝</div>
            <v-text-field
              v-model="calcSelfPayItem.totalPrice"
              label="總自付額度"
              outlined
              dense
              hide-details
              readonly
            ></v-text-field>
          </div>
        </v-card-text>
      </v-card>

      <v-dialog v-model="editedDialog" max-width="500">
        <v-card>
          <v-card-title>{{ editedFormTitle }}</v-card-title>

          <v-card-text>
            <v-container>
              <v-form
                ref="editedForm"
                lazy-validation
              >
                <v-select
                  v-model="editedItem.id"
                  :items="careItems"
                  :menu-props="{ offsetY: true }"
                  :rules="editedRule.id"
                  :item-text="item => `${item.id} ${item.name}`"
                  item-value="id"
                  label="照護項目"
                  outlined
                ></v-select>

                <v-text-field
                  v-model="editedItem.price"
                  type="number"
                  label="價格"
                  outlined
                  readonly
                ></v-text-field>

                <v-text-field
                  v-model="editedItem.amount"
                  :rules="editedRule.amount"
                  type="number"
                  label="數量"
                  outlined
                ></v-text-field>
              </v-form>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="mr-2" color="primary" @click="editedCancel" text>取消</v-btn>
            <v-btn color="primary" @click="editedSave" text>確認</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="deleteDialog" max-width="500px">
        <v-card>
          <v-card-title>請問確定要刪除 "{{ editedItem.name }}" 項目嗎?</v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="deleteCancel" text>取消</v-btn>
            <v-btn color="primary" @click="deleteSave" text>確認</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "長期照護服務計畫",

    headers: [
      { text: "編號", value: "id" },
      { text: "服務項目", value: "name" },
      { text: "金額", value: "price" },
      { text: "服務數量", value: "amount" },
      { text: "小計", value: "totalPrice" },
      { text: "操作", value: "actions" },
    ],
    items: [],
    careItems: [],
    amountItems: [],
    selfPayItems: [
      { id: 1, name: '一般戶', selfPayPercent: 0.16 },
      { id: 2, name: '中低收', selfPayPercent: 0.05 },
      { id: 3, name: '低收', selfPayPercent: 0 }
    ],

    deleteDialog: false,

    editedDialog: false,
    editedForm: null,
    editedIndex: -1,
    editedItem: {
      id: '',
      name: '',
      price: 0,
      amount: 0
    },
    defaultItem: {
      id: '',
      name: '',
      price: 0,
      amount: 0
    },
    editedRule: {
      id: [
        v => !!v || '請選擇照護項目',
      ],
      amount: [
        v => !!v || '數量不可為零',
      ]
    },

    calcItem: {
      degreePrice: 0,
      bPrice: 0,
      cPrice: 0,
      diffPrice: 0
    },
    calcSelfPayItem: {
      selfPayPercent: 0,
      bPrice: 0,
      cPrice: 0
    }
  }),

  mounted() {
    this.careItems = require('@/assets/long_term_care_item.json')
    this.amountItems = require('@/assets/long_term_care_personal_amount.json')
  },

  computed: {
    editedFormTitle () {
      return this.editedIndex === -1 ? '新增服務項目' : '編輯服務項目'
    }
  },

  watch: {
    'editedItem.id': {
      handler() {
        const { editedDialog, editedItem, careItems } = this
        if(editedDialog) {
          for(const careItem of careItems) {
            if(editedItem.id === careItem.id) {
              editedItem.name = careItem.name
              editedItem.price = careItem.price
              break
            }
          }
        }
      },
      deep: true
    },

    'calcItem.degreePrice': {
      handler() {
        this.calcPrice()
      },
      deep: true
    },

    'calcSelfPayItem.selfPayPercent': {
      handler() {
        this.calcSelfPayPrice()
      },
      deep: true
    },

    items: {
      handler() {
        this.calcPrice()
        this.calcSelfPayPrice()
      },
      deep: true
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editedDialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.deleteDialog = true
    },

    editedCancel() {
      this.editedDialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    editedSave() {
      if(this.$refs.editedForm.validate()) {
        if (this.editedIndex > -1) {
          Object.assign(this.items[this.editedIndex], this.editedItem)
        } else {
          this.items.push(this.editedItem)
        }
        this.editedCancel()
      }
    },

    deleteCancel() {
      this.deleteDialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    deleteSave() {
      this.items.splice(this.editedIndex, 1)
      this.deleteCancel()
    },

    calcPrice() {
      const { calcItem, items } = this
      
      let bPrice = 0
      let cPrice = 0
      for(const item of items) {
        if(item.id.startsWith('B')) {
          bPrice += item.price * item.amount
        } else if(item.id.startsWith('C')) {
          cPrice += item.price * item.amount
        }
      }

      calcItem.bPrice = bPrice
      calcItem.cPrice = cPrice
      calcItem.diffPrice = calcItem.degreePrice - (calcItem.bPrice + calcItem.cPrice)
    },

    calcSelfPayPrice() {
      const { calcSelfPayItem, items } = this
      
      let bPrice = 0
      let cPrice = 0
      let halfSelfPayPercent = calcSelfPayItem.selfPayPercent ? calcSelfPayItem.selfPayPercent / 2 : 0

      if(calcSelfPayItem.selfPayPercent > 0) {
        for(const item of items) {
          if(item.id === 'BA15-2' || item.id === 'BA16-2') {
            const halfPrice = item.price / 2
            bPrice += Math.floor((halfPrice + (item.price * halfSelfPayPercent))) * item.amount
          } else if(item.id.startsWith('B')) {
            bPrice += Math.floor(item.price * calcSelfPayItem.selfPayPercent) * item.amount
          } else if(item.id.startsWith('C')) {
            cPrice += Math.floor(item.price * calcSelfPayItem.selfPayPercent) * item.amount
          }
        }
      } else {
        for(const item of items) {
          if(item.id === 'BA15-2' || item.id === 'BA16-2') {
            bPrice += Math.floor(item.price / 2) * item.amount
          }
        }
      }

      calcSelfPayItem.bPrice = bPrice
      calcSelfPayItem.cPrice = cPrice
      calcSelfPayItem.totalPrice = calcSelfPayItem.bPrice + calcSelfPayItem.cPrice
    }
  }
};
</script>