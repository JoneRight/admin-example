<template>
  <div>
    <!-- bidirectional data binding（双向数据绑定） -->
    <quill-editor
      ref="myQuillEditor"
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '<h2>I am Example</h2>',
      editorOption: {
        onOff: true,
        placeholder: '在此插入。。。',
        modules: {
          toolbar: [
            [{ size: ['10px', false, '20px', '24px', '32px'] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ color: [] }, { background: [] }],
            [{ align: '' }, { align: 'center' }, { align: 'right' }],
          ],
        },
        theme: 'snow',
      },
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    },
  },
  mounted() {
    console.log('this is current quill instance object', this.editor)
  },
  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    },
  },
}
</script>

<style lang="scss" scoped>
</style>