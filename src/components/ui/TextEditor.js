import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor({ paramRef, onChange, defaultValue, placeholder, theme }) {
  return (
    <>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
        onInit={(evt, editor) => paramRef ? paramRef(editor) : null}
        onEditorChange={evt => onChange ? onChange(evt) : null}
        initialValue={paramRef ? defaultValue : null}
        value={onChange ? defaultValue : null}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount', 'link'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help' + ' | link',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          skin: theme === 'dark' ? 'oxide-dark' : 'oxide',
          content_css: theme === 'dark' ? 'dark' : 'default',
          placeholder: placeholder
        }}
      />
    </>
  );
}