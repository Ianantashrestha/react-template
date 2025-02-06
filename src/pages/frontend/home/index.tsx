import Container from '@components/container'
import Input from '@components/fields/Input'
import DropDown from '@components/fields/Dropdown'
import { Formik } from 'formik'

const HomePage = () => {
  return (
    <>
      <Container>
        This is Home Page
        <Formik initialValues={{}} onSubmit={() => {}}>
          {() => {
            return (
              <>
                <Input name="test" placeholder="Test" />
                <DropDown
                  name="dropdown"
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
                      value: 'option2',
                      title: 'Option 3',
                    },
                  ]}
                  titleAsKey="title"
                  valueAsKey="value"
                />
              </>
            )
          }}
        </Formik>
      </Container>
    </>
  )
}

export default HomePage
