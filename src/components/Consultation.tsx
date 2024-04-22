import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { validationSchema } from '@utils/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { fileToBase64 } from '@utils/functions';
import InputMask from 'react-input-mask';
import consultationImg from '@assets/images/consultation.jpg';
import { PulseLoader } from 'react-spinners';
import { InputFile } from './small/InputFile';

// http://localhost:3001

export type Fields = {
    name: string;
    phone: string;
    image?: FileList;
    description?: string;
};

export function Consultation() {
    const {
        register,
        setValue,
        trigger,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(validationSchema),
    });

    const [isEmailSending, setIsEmailSending] = useState(false);
    const [emailSendResult, setEmailSendResult] = useState({
        success: false,
        message: '',
    });

    const onSubmit = async (data: Fields) => {
        const { name, phone, image, description } = data;

        const files = image ? Array.from(image) : [];
        const images64 = files.length
            ? (
                  await Promise.allSettled(
                      files.map((file) => fileToBase64(file))
                  )
              ).map((res) => {
                  if (res.status === 'fulfilled') return res.value;
                  return undefined;
              })
            : [];

        try {
            setIsEmailSending(true);
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    phone,
                    images: images64,
                    description,
                }),
            });
            if (response.ok)
                setEmailSendResult({
                    success: true,
                    message: 'Email успешно отправлен.',
                });
            else {
                setEmailSendResult({
                    success: false,
                    message: 'Ошибка отправки. Попробуйте ещё раз.',
                });
            }
        } catch (err) {
            setEmailSendResult({
                success: false,
                message: 'Ошибка отправки. Попробуйте ещё раз.',
            });
        } finally {
            setIsEmailSending(false);
            setTimeout(() => {
                setEmailSendResult({
                    success: false,
                    message: '',
                });
            }, 1000);
        }
    };

    return (
        <section className="consultation-bg">
            <div className="consultation wrapper">
                <div className="consultation__img-container">
                    <img
                        src={consultationImg}
                        alt="Welder"
                        className="consultation__img-container"
                    />
                </div>
                <div className="consultation__content">
                    <h2>Расчёт стоимости работы</h2>
                    <p>
                        Для расчёта стоимости оставьте свои контактные данные и,
                        при наличии, медиафайл с желаемым изделием / работой к
                        выполнению.
                    </p>
                    <form
                        className="consultation-form"
                        method="post"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="form__item">
                            <label htmlFor="name" className="form__label">
                                Ваше имя<span>&nbsp;*</span>
                            </label>
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    {...register('name')}
                                    className="form__input"
                                    placeholder="Имя"
                                />
                                <p className="form__error">
                                    {errors.name ? errors.name.message : ''}
                                </p>
                            </div>
                        </div>
                        <div className="form__item">
                            <label htmlFor="phone" className="form__label">
                                Контактный номер<span>&nbsp;*</span>
                            </label>
                            <div>
                                <InputMask
                                    type="tel"
                                    id="phone"
                                    mask="+375 (99) 999-99-99"
                                    {...register('phone')}
                                    className="form__input"
                                    placeholder="+375 (__) ___-__-__"
                                />
                                <p className="form__error">
                                    {errors.phone ? errors.phone?.message : ''}
                                </p>
                            </div>
                        </div>
                        <div className="form__item">
                            <div>
                                <textarea
                                    {...register('description')}
                                    className="form__input"
                                    placeholder="Комментарий"
                                    rows={4}
                                />
                                <p className="form__error">
                                    {errors.description
                                        ? errors.description.message
                                        : ''}
                                </p>
                            </div>
                        </div>
                        <InputFile
                            register={register}
                            error={errors.image}
                            setValue={setValue}
                            trigger={trigger}
                        />
                        <button
                            className="form__button"
                            type="submit"
                            disabled={!isValid}
                        >
                            {isEmailSending ? (
                                <PulseLoader color="#fff" />
                            ) : (
                                'Отправить'
                            )}
                        </button>

                        {emailSendResult.message && (
                            <div
                                className={`send-result ${emailSendResult.success ? 'send-result_success' : 'send-result_error'}`}
                            >
                                {emailSendResult.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
