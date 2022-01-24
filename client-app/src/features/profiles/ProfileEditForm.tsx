import { Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import * as Yup from 'yup';
import { LoadingButton } from "@mui/lab";
import MyTextInputContained from "../../app/common/form/MyTextInputContained";
import MyTextAreaContained from "../../app/common/form/MyTextAreaContained";

interface Props {
    setEditMode: (editMode: boolean) => void;
}

export default observer(function ProfileEditForm({setEditMode}: Props) {
    const {profileStore: {profile, updateProfile}} = useStore();
    return (
        <Formik
            initialValues={{displayName: profile?.displayName, bio:
                profile?.bio}}
            onSubmit={values => {
                updateProfile(values).then(() => {
                    setEditMode(false);
                })
            }}
            validationSchema={Yup.object({
            displayName: Yup.string().required()
            })}
        >
        {({isSubmitting, isValid, dirty}) => (
            <Form className='ui form'>
                <MyTextInputContained placeholder='Display Name'
                    name='displayName' />
                <MyTextAreaContained rows={3} placeholder='Add your bio'
                    name='bio' />
                <LoadingButton
                    type='submit'
                    loading={isSubmitting}
                    children={'Update profile'}
                    disabled={!isValid || !dirty}
                    sx={{float: 'right'}}
                />
            </Form>
 )}
 </Formik>
 )
})