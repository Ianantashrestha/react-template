import Container from '@components/container'
import Input from '@components/fields/input'
import DropDown from '@components/fields/dropdown'
import Editor from '@components/fields/editor'
import Upload from '@components/fields/upload'
import { Formik } from 'formik'

const HomePage = () => {
  return (
    <>
      <Container>
        This is Home Page
        <Formik
          initialValues={{
            text: '',
            dropdown: '',
            editor: '',
            upload: null,
          }}
          onSubmit={() => {}}
        >
          {() => {
            return (
              <>
                <Input name="text" placeholder="Text" label="Text" />
                <br />
                <DropDown
                  name="dropdown"
                  label="Dropdown"
                  placeholder="Select Dropdown"
                  hasSearch
                  options={[
                    {
                      value: 'option1',
                      title: 'Option 1',
                    },
                    {
                      value: 'option2',
                      title: 'Option 2',
                    },
                    {
                      value: 'option3',
                      title: 'Option 3',
                    },
                  ]}
                  titleAsKey="title"
                  valueAsKey="value"
                />
                <br />
                <Editor name="editor" label="Editor" />
                <br />

                <Upload label="Upload" name="upload" />
              </>
            )
          }}
        </Formik>
      </Container>
    </>
  )
}

export default HomePage
