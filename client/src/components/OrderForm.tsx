import { useForm } from 'react-hook-form';
import { validationSchema } from '@utils/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { fileToBase64 } from '@utils/functions';

// rmK3TK9AE5XCLqx4JJWs

export type Fields = {
    name: string;
    phone: string;
    image?: FileList;
    description?: string;
};

export function OrderForm() {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({
        mode: 'all',
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data: Fields) => {
        const { name, phone, description, image } = data;

        const image64 = image ? await fileToBase64(image[0]) : '';

        try {
            let response = await fetch('http://localhost:3001/api/send', {
                method: 'POST',

                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(data),
            });

            alert('Email sent!');
        } catch (err) {
            alert(err);
        }
    };

    return (
        <section className="order-form-bg">
            <div className="order-form wrapper">
                <form
                    className="flex flex-col h-fit w-1/2 bg-pink-400 p-5 rounded-md"
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <fieldset>
                        <label htmlFor="name">Ваше Имя:</label>
                        <div>
                            <input
                                type="text"
                                id="name"
                                {...register('name')}
                            />
                            <p>{errors.name ? errors.name.message : ''}</p>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="phone">Контактный номер:</label>
                        <div>
                            <input
                                type="tel"
                                id="phone"
                                {...register('phone')}
                            />
                            <p>{errors.phone ? errors.phone?.message : ''}</p>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="image">Фото: </label>
                        <div>
                            <input
                                type="file"
                                id="image"
                                {...register('image')}
                            />
                            <p>{errors.image ? errors.image.message : ''}</p>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="description">
                            Комментарий к заказу:{' '}
                        </label>
                        <div>
                            <input
                                type="text"
                                id="description"
                                {...register('description')}
                            />
                            <p>
                                {errors.description
                                    ? errors.description.message
                                    : ''}
                            </p>
                        </div>
                    </fieldset>

                    <button
                        className="self-center w-fit bg-pink-800 px-10 py-2 border-solid border-t border-pink-200 text-pink-50 rounded disabled:opacity-50"
                        type="submit"
                        disabled={!isValid}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
