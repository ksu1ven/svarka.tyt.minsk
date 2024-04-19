import * as yup from 'yup';
import parsePhoneNumber from 'libphonenumber-js';

const { object, string, mixed } = yup;

export const validationSchema = object({
    name: string().required('Это обязательное поле'),
    phone: string()
        .required('Это обязательное поле')
        .test('valid', 'Неверный номер', (phone) =>
            parsePhoneNumber(phone)?.isValid()
        ),
    description: string(),
    image: mixed<FileList>(),
    // image: mixed<FileList>()
    //     .test('fileSize', 'The image size must be up to 200 kB', (file) => {
    //         if (!file?.length) return false;
    //         return file[0].size <= 204800;
    //     })
    //     .test(
    //         'extension',
    //         'The image must be in PNG or JPEG format',
    //         (file) => {
    //             if (!file?.length) return false;
    //             return (
    //                 file[0].type == 'image/png' || file[0].type === 'image/jpeg'
    //             );
    //         }
    //     ),
});
